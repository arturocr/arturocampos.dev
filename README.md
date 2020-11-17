## ⚡️ arturocampos.dev ⚡️

This is my personal website, I built it on top of Next.js 10+, taking advantage of internationalized routing, image optimization and all the wonders that the framework provides.

The website was built to render content in two languages: Spanish (my native one) and English.

My idea is to share knowledge and build a community or network around interesting topics in Web Development.

Feel free to contribute.

## Project Structure

- `components/*`: contains a bunch of custom react components.
- `content/*`: internationalized content of main pages, like `index` and`/uses` .
- `i18n/*`: i18n configuration, strings and a react hook for string replacement.
- `lib/*`: a few helper functions and constants.
- `pages/*`: Static and dynamic pages.
- `posts/*`: internationalized content for blog posts.
- `public/*`: static files.
- `scripts/*`: helper scripts, like a sitemap generator.
- `styles/*`: guess what?

## Running It

```bash
git clone git@github.com:arturocr/arturocampos.dev.git
cd arturocampos.dev
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Built Using

- [Next.js](https://nextjs.org).
- [Vercel](https://vercel.com).
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote).
- [Tailwind CSS](https://tailwindcss.com/).
