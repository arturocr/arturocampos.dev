import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const defaultLocale = 'en';
const locales = ['en', 'es'];
const modDate = new Date().toISOString();

const generateSitemap = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/404.js', // Ignore error page
    '!pages/**/\\[*\\].js', // Ignore dynamic routes
    '!pages/api', // Ignore API routes
  ]);
  const posts = await globby(['data/posts/**/*.mdx', 'data/posts/**/_*.mdx']);

  const pagesRoutes = [];

  const postsRoutes = posts.map(post => {
    const postPath = post.replace('data/posts/', '').replace('.mdx', '');
    const pathParts = postPath.split('/');
    if (pathParts.length === 1) {
      return pathParts[0];
    } else {
      const [langPrefix, ...restOfPath] = pathParts;
      const path = restOfPath.join('/');
      return langPrefix === defaultLocale
        ? `/blog/${path}`
        : `/${langPrefix}/blog/${path}`;
    }
  });

  pages
    .map(page => {
      const path = page.replace('pages', '').replace('.js', '');
      if (page.endsWith('/index.js')) {
        const index = path.indexOf('/index');
        return path.slice(0, index);
      }
      return path;
    })
    .forEach(pagePath => {
      locales.forEach(locale => {
        pagesRoutes.push(
          locale === defaultLocale ? pagePath : `/${locale}${pagePath}`
        );
      });
    });

  const allRoutes = [...pagesRoutes, ...postsRoutes];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${allRoutes
        .map(
          route =>
            `<url>
              <loc>${`https://arturocampos.dev${route}`}</loc>
              <lastmod>${modDate}</lastmod>
            </url>\n`
        )
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
};

generateSitemap();