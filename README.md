# arturocampos.dev

Personal website and blog built with Next.js, TypeScript, and Tailwind CSS. Content is served in two languages — English and Spanish — using Next.js built-in i18n routing.

## Tech Stack

- **[Next.js](https://nextjs.org)** — Pages Router with built-in i18n routing and image optimization
- **[React](https://react.dev)** — v19
- **[TypeScript](https://www.typescriptlang.org)** — strict mode
- **[Tailwind CSS](https://tailwindcss.com)** — v4 with CSS-based theme configuration
- **[MDX](https://mdxjs.com)** via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) — for blog posts and page content
- **[next-seo](https://github.com/garmeeh/next-seo)** — SEO meta tags and Open Graph
- **[Vercel](https://vercel.com)** — deployment

## Project Structure

```
├── components/        # React components
├── data/
│   ├── content/       # Static page content (index, uses) in {en,es}/
│   ├── posts/         # Blog posts as MDX files in {en,es}/
│   └── calculator-config.json
├── i18n/              # Translations, strings, and useTranslation hook
├── lib/               # Helper functions and content utilities
├── pages/             # Next.js pages (static, dynamic, and API routes)
├── public/            # Static assets
├── scripts/           # Build-time scripts (sitemap generator)
└── styles/            # Global CSS (Tailwind theme, Prism syntax highlighting)
```

## Getting Started

```bash
git clone git@github.com:arturocr/arturocampos.dev.git
cd arturocampos.dev
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

| Command         | Description                              |
|-----------------|------------------------------------------|
| `pnpm dev`      | Start the development server             |
| `pnpm build`    | Production build (also generates sitemap)|
| `pnpm start`    | Start the production server              |
| `pnpm lint`     | Run ESLint                               |
| `pnpm lint:fix` | Run ESLint with auto-fix                 |
| `pnpm prettier` | Format all files with Prettier           |

## Content

Blog posts and page content are MDX files under `data/`, organized by locale:

```
data/posts/en/my-post.mdx
data/posts/es/my-post.mdx
```

Each MDX file requires frontmatter with the following fields:

```mdx
---
slug: my-post
date: '2024-01-01'
title: My Post Title
description: A short description of the post.
---
```

MDX files can embed `<Image>`, `<YouTube>`, and `<Vimeo>` components directly.

## Internationalization

The site supports English (`en`, default) and Spanish (`es`). Locale routing is handled by Next.js — Spanish pages are served at `/es/*`. UI strings live in `i18n/strings.ts` and are accessed via the `useTranslation` hook.

## Commit Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint + Husky. Allowed types: `build`, `chore`, `ci`, `content`, `deps`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.
