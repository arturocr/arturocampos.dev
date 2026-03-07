import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import rehypeRaw from 'rehype-raw';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkCodeTitles from 'remark-code-titles';

import { getComponents, getHydrationComponentsList } from '@/lib/util';
import type { GetContentParams, ContentResult, PostData } from '../types';

// Directories used to read markdown files
const directories: Record<string, string> = {
  content: path.resolve(process.cwd(), 'data/content'),
  posts: path.resolve(process.cwd(), 'data/posts'),
};

// Returns a list of files in the directories and subdirectories
const getAllFileNames = (
  directoryPath: string,
  filesList: string[] = []
): string[] => {
  if (!fs.existsSync(directoryPath)) {
    return [];
  }
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  // Filter to include only *.mdx files
  const filteredList = filesList.filter((file) => file.includes('.mdx'));
  return filteredList;
};

export const getData = (fileName: string): string => {
  const fullPath = path.resolve(process.cwd(), `data/${fileName}`);
  if (!fs.existsSync(fullPath)) {
    return '{}';
  }
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  return fileContents;
};

// Collects information from posts files and sorts them by date
export const getSortedPostsData = ({
  locale,
}: {
  locale: string;
}): PostData[] => {
  const directory = `${directories['posts']}/${locale}`;
  if (!fs.existsSync(directory)) {
    return [];
  }
  const allPostsData: PostData[] = fs.readdirSync(directory).map((p) => {
    const content = fs.readFileSync(path.join(directory, p), 'utf8');
    const frontMatter = matter(content).data;
    return {
      slug: frontMatter.slug,
      content,
      frontMatter: frontMatter as PostData['frontMatter'],
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

// Returns the list of slugs with corresponding locales
export const getAllPostSlugs = (): {
  params: { slug: string };
  locale: string;
}[] => {
  // Get the list of *.mdx files in the posts directory
  const fileNames = getAllFileNames(directories.posts);

  // Splits the locale and filename/slug parts of ['en/post-name.mdx']
  // and return them as parameters for later use in Next
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.split('/')[1].replace(/\.mdx$/, ''),
    },
    locale: fileName.split('/')[0],
  }));
};

// Return the parsed content of a file given a slug,
// a locale and a type ('content' or 'posts')
export const getContent = async ({
  slug,
  locale,
  type,
}: GetContentParams): Promise<ContentResult> => {
  const fullPath = path.join(`${directories[type]}/${locale}`, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  // List of components found inside the MDX
  const hydrationComponentsList = getHydrationComponentsList(content);
  const mdxSource = await serialize(content, {
    blockJS: false,
    mdxOptions: {
      remarkPlugins: [remarkCodeTitles],
      rehypePlugins: [
        [rehypeRaw, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxjsEsm', 'mdxFlowExpression', 'mdxTextExpression'] }],
        mdxPrism,
      ],
    },
  });

  return {
    props: {
      mdxSource,
      frontMatter: data as ContentResult['props']['frontMatter'],
      hydrationComponentsList,
    },
  };
};
