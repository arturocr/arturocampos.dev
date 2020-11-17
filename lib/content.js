import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import remarkCodeTitles from 'remark-code-titles';

// Directories used to read markdown files
const directories = {
  content: path.resolve(process.cwd(), 'content'),
  posts: path.resolve(process.cwd(), 'posts'),
};

// Returns a list of files in the directories and subdirectories
const getAllFileNames = (directoryPath, filesList = []) => {
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  // Filter to include only *.mdx files
  const filteredList = filesList.filter(file => file.includes('.mdx'));
  return filteredList;
};

// Collects information from posts files and sorts them by date
export const getSortedPostsData = ({ locale }) => {
  const directory = path.join(process.cwd(), `posts/${locale}`);
  const allPostsData = fs.readdirSync(directory).map(p => {
    const content = fs.readFileSync(path.join(directory, p), 'utf8');
    const frontMatter = matter(content).data;
    return {
      slug: frontMatter.slug,
      content,
      frontMatter,
    };
  });

  // Sorts posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

// Separates the file name and language
export const getAllPostSlugs = () => {
  // Get the list of *.md files in the posts directory
  const fileNames = getAllFileNames(directories.posts);

  // Splits the "en" and "filename" parts of ['en/filename.md']
  // and return them as parameters for later use in Next
  return fileNames.map(fileName => ({
    params: {
      slug: fileName.split('/')[1].replace(/\.mdx$/, ''),
    },
    locale: fileName.split('/')[0],
  }));
};

// Return the parsed content of a file given a slug, a locale,
// a type ('content' or 'posts') and a list of components that
// resolve any component use inside the MDX file
export const getContent = async ({ slug, locale, type, components }) => {
  const fullPath = path.join(`${directories[type]}/${locale}`, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
  });

  return { props: { mdxSource, frontMatter: data } };
};
