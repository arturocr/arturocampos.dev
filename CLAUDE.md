# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website and blog for Arturo Campos (arturocampos.dev). Built with Next.js 14 (Pages Router), React 18, TypeScript, Tailwind CSS 3, and MDX for content. Deployed on Vercel. Bilingual site supporting English (`en`, default) and Spanish (`es`).

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build (auto-generates sitemap via `postbuild`)
- `pnpm lint` - ESLint
- `pnpm lint:fix` - ESLint with auto-fix
- `pnpm prettier` - Format all files

## Commit Conventions

Commits are enforced by commitlint (conventional commits) via Husky. Allowed types: `build`, `chore`, `ci`, `content`, `deps`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. lint-staged runs `lint:fix` on staged `.ts`/`.tsx` files in `pages/` and `components/`.

## Code Style

- TypeScript with strict mode - `.ts` and `.tsx` files
- Prettier: single quotes, `jsxSingleQuote: true`, trailing commas (es5), 2-space indent, semicolons, no tabs
- ESLint extends `next` and `prettier` (flat config in `eslint.config.mjs`)
- Path aliases via tsconfig: `@/components/*`, `@/i18n/*`, `@/lib/*`, `@/styles/*`
- Shared type definitions in `types/index.ts`

## Architecture

### Content System
Content is MDX files under `data/`, organized by type and locale:
- `data/posts/{en,es}/` - Blog posts (with frontmatter: slug, date, title, description)
- `data/content/{en,es}/` - Static page content (index, uses)
- `data/calculator-config.json` - Tax calculator configuration

`lib/content.ts` handles reading/parsing MDX with gray-matter and next-mdx-remote. MDX files can embed `Image`, `Vimeo`, and `YouTube` components (detected automatically by `lib/util.ts`).

### i18n
Custom lightweight i18n (no library). Next.js built-in i18n routing (`next.config.js`) handles locale prefixing. Translations are key-value pairs in `i18n/strings.ts`. The `useTranslation` hook (`i18n/useTranslation.ts`) returns a `t()` function using the current router locale.

### Pages
Pages Router pattern. Key pages:
- `pages/index.tsx` - Home (renders MDX from `data/content`)
- `pages/blog/index.tsx` - Blog listing
- `pages/blog/[slug].tsx` - Individual blog post (dynamic route)
- `pages/projects/tax-calculator-crc.tsx` - Costa Rica tax calculator
- `pages/uses.tsx` - Uses page
- `pages/api/page-views.ts` - API route for view tracking

### Tax Calculator
A standalone feature under `components/tax-calculator/` with its own config (`data/calculator-config.json`). Uses Costa Rican colon (CRC) currency formatting from `lib/util.ts`.

### Layout
`_app.tsx` wraps all pages with Header, Footer, MDXProvider, DefaultSeo, and Google Analytics tracking. The decorative gradient border is applied via Tailwind utility classes in `_app.tsx`.
