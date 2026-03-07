# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website and blog for Arturo Campos (arturocampos.dev). Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and MDX for content. Deployed on Vercel. Bilingual site supporting English (`en`, default) and Spanish (`es`).

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build (auto-generates sitemap via `postbuild`)
- `pnpm lint` - ESLint
- `pnpm lint:fix` - ESLint with auto-fix
- `pnpm prettier` - Format all files

## Commit Conventions

Commits are enforced by commitlint (conventional commits) via Husky. Allowed types: `build`, `chore`, `ci`, `content`, `deps`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. lint-staged runs `lint:fix` on staged `.ts`/`.tsx` files in `components/`.

## Code Style

- TypeScript with strict mode - `.ts` and `.tsx` files
- Prettier: single quotes, `jsxSingleQuote: true`, trailing commas (es5), 2-space indent, semicolons, no tabs
- ESLint extends `next` and `prettier` (flat config in `eslint.config.mjs`)
- Path aliases via tsconfig: `@/components/*`, `@/i18n/*`, `@/lib/*`, `@/styles/*`
- Shared type definitions in `types/index.ts`

## Architecture

### App Router Structure

```
app/
├── layout.tsx              # Root layout: HTML shell, GA scripts, metadata, CSS imports
└── [locale]/
    ├── layout.tsx          # Locale layout: Header + Footer with locale prop
    ├── page.tsx            # Home page
    ├── not-found.tsx       # 404 page
    ├── blog/
    │   ├── page.tsx        # Blog listing
    │   └── [slug]/page.tsx # Individual blog post
    ├── projects/
    │   ├── page.tsx        # Projects listing
    │   └── tax-calculator-crc/page.tsx
    └── uses/page.tsx
```

API route: `app/api/page-views/route.ts`

### Locale Routing

`proxy.ts` (Next.js middleware, exported as `proxy` not `middleware`) handles locale routing:
- English: no URL prefix (`/blog`, `/uses`, etc.)
- Spanish: `/es/` prefix (`/es/blog`, etc.)
- Rewrites prefix-less paths → `/en/...` internally
- Redirects `/en/...` → `/...` for canonical URLs

The matcher regex excludes static files, API routes, and `_next/*`. Extensions up to 20 characters are excluded (covers `.webmanifest`, `.xml`, etc.).

### Content System

Content is MDX files under `data/`, organized by type and locale:
- `data/posts/{en,es}/` - Blog posts (frontmatter: `slug`, `date`, `title`, `description`)
- `data/content/{en,es}/` - Static page content (index, uses)
- `data/calculator-config.json` - Tax calculator configuration

`lib/content.ts` reads/parses MDX with gray-matter. `lib/mdx.ts` exports shared MDX plugin options for `next-mdx-remote/rsc`.

**Important MDX gotcha:** `next-mdx-remote` strips JSX attribute value expressions (`{value}`) by default for security. Use string literals for numeric props: `width="160"` not `width={160}`.

### MDX Rendering Pattern

```tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxOptions } from '@/lib/mdx';

<MDXRemote
  source={content}
  components={{ ...MDXComponents, Image: Image as any, Vimeo: Vimeo as any, YouTube: YouTube as any }}
  options={{ mdxOptions }}
/>
```

`Image`, `Vimeo`, and `YouTube` must be cast as `any` for the `components` prop. `rehype-raw` is configured with `passThrough` for MDX-specific node types to allow `mdx-prism` syntax highlighting to work alongside MDX JSX.

### i18n

Custom lightweight i18n (no library). Two helpers:
- `i18n/getTranslation.ts` — `getTranslation(locale)` for server components
- `i18n/useTranslation.ts` — `useTranslation()` hook (`'use client'`) using `useParams()` from `next/navigation`

Translations are key-value pairs in `i18n/strings.ts`. `lib/util.ts` provides `getLocalizedPath(locale, path)`.

### Component Boundaries

Server components (accept `locale` prop): `Header`, `Footer`, `DonateButton`, `ReadMore`, `BlogPost`, `Disclaimer`

Client components (`'use client'`): `NavLinks`, `ActiveLink`, `LanguageSelector`, `Calculator`, `Vimeo`, `YouTube`, `ViewsCounter`, `Analytics`, `Pagination`

### Tax Calculator

Standalone feature under `components/tax-calculator/` with config in `data/calculator-config.json`. Uses Costa Rican colon (CRC) currency formatting from `lib/util.ts`.

### Layout

`app/layout.tsx` is the root layout wrapping all pages with HTML shell, metadata, GA scripts, and CSS imports. `app/[locale]/layout.tsx` wraps each locale's pages with `Header` and `Footer`.
