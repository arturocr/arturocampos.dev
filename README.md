## ⚡️ arturocampos.dev ⚡️

This is my personal website, built with Next.js, taking advantage of internationalized routing, image optimization and all the wonders that the framework provides.

The website renders content in two languages: Spanish (my native one) and English.

My idea is to share knowledge and build a community or network around interesting topics in Web Development.

Feel free to contribute.

## Project Structure

- `components/*`: custom React components.
- `data/*`: internationalized content for main pages, blog posts and calculator config.
- `i18n/*`: i18n configuration, strings and a React hook for string replacement.
- `lib/*`: helper functions and constants.
- `pages/*`: static and dynamic pages.
- `public/*`: static files.
- `scripts/*`: helper scripts, like a sitemap generator.
- `styles/*`: global and component styles.

## Running It

```bash
git clone git@github.com:arturocr/arturocampos.dev.git
cd arturocampos.dev
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Built Using

- [Next.js](https://nextjs.org)
- [Vercel](https://vercel.com)
- [Tailwind CSS](https://tailwindcss.com)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [next-seo](https://github.com/garmeeh/next-seo)
