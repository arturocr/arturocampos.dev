import { writeFileSync } from 'fs';
import { globby } from 'globby';

const siteUrl = 'https://arturocampos.dev';
const defaultLocale = 'en';
const locales = ['en', 'es'];
const modDate = new Date().toISOString();

const generateSitemap = async () => {
  const posts = await globby(['data/posts/**/*.mdx', '!data/posts/**/_*.mdx']);

  const postsRoutes = posts.map(post => {
    const postPath = post.replace('data/posts/', '').replace('.mdx', '');
    const [langPrefix, ...restOfPath] = postPath.split('/');
    const path = restOfPath.join('/');
    return langPrefix === defaultLocale
      ? `/blog/${path}`
      : `/${langPrefix}/blog/${path}`;
  });

  // Static app routes (one entry per locale)
  const staticRoutes = [
    '',
    '/blog',
    '/projects',
    '/projects/tax-calculator-crc',
    '/uses',
  ];
  const pagesRoutes = staticRoutes.flatMap(route =>
    locales.map(locale =>
      locale === defaultLocale ? route || '/' : `/${locale}${route}`
    )
  );

  const allRoutes = [...pagesRoutes, ...postsRoutes];

  const urls = allRoutes
    .map(
      route =>
        `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${modDate}</lastmod>\n  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
${urls}
</urlset>
`;

  writeFileSync('public/sitemap.xml', sitemap);
};

generateSitemap();
