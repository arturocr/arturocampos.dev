# arturocampos.dev

Personal website and blog built with Next.js, TypeScript, and Tailwind CSS. Content is served in two languages — English and Spanish — using a custom i18n routing setup.

## Tech Stack

- **[Next.js](https://nextjs.org)** — App Router with image optimization
- **[React](https://react.dev)** — v19
- **[TypeScript](https://www.typescriptlang.org)** — strict mode
- **[Tailwind CSS](https://tailwindcss.com)** — v4 with CSS-based theme configuration
- **[MDX](https://mdxjs.com)** via [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) — for blog posts and page content
- **[Vercel](https://vercel.com)** — deployment

## Project Structure

```
├── app/
│   ├── layout.tsx             # Root layout (metadata, GA scripts, CSS imports)
│   └── [locale]/              # Locale-aware pages
│       ├── layout.tsx         # Locale layout (Header + Footer)
│       ├── page.tsx           # Home
│       ├── blog/
│       │   ├── page.tsx       # Blog listing
│       │   └── [slug]/page.tsx# Individual blog post
│       ├── projects/
│       │   ├── page.tsx       # Projects listing
│       │   └── tax-calculator-crc/page.tsx
│       └── uses/page.tsx
├── components/                # React components (server and client)
├── data/
│   ├── content/               # Static page content (index, uses) in {en,es}/
│   ├── posts/                 # Blog posts as MDX files in {en,es}/
│   └── calculator-config.json
├── i18n/                      # Translations and locale helpers
├── lib/                       # Content utilities and helper functions
├── proxy.ts                   # Locale routing middleware
├── public/                    # Static assets
└── styles/                    # Global CSS (Tailwind theme, Prism syntax highlighting)
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

| Command         | Description                               |
|-----------------|-------------------------------------------|
| `pnpm dev`      | Start the development server              |
| `pnpm build`    | Production build (also generates sitemap) |
| `pnpm start`    | Start the production server               |
| `pnpm lint`     | Run ESLint                                |
| `pnpm lint:fix` | Run ESLint with auto-fix                  |
| `pnpm prettier` | Format all files with Prettier            |

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

MDX files can embed `<Image>`, `<YouTube>`, and `<Vimeo>` components directly without importing them. Use string attributes for numeric values (e.g. `width="160"` not `width={160}`), as JSX expressions are stripped by the MDX renderer for security.

## Internationalization

The site supports English (`en`, default) and Spanish (`es`). `proxy.ts` handles locale routing — Spanish pages are served at `/es/*`, English pages at the root. UI strings live in `i18n/strings.ts` and are accessed via:

- `getTranslation(locale)` — server components
- `useTranslation()` hook — client components

## Commit Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint + Husky. Allowed types: `build`, `chore`, `ci`, `content`, `deps`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.
