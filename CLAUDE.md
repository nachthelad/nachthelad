# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run build:analyze  # Build with bundle analyzer (sets ANALYZE=true)
npm run lint         # ESLint
npm run start        # Start production server
```

No test framework is configured.

## Environment Variables

Required for local development (create `.env.local`):

```
NOTION_API_KEY=...
NOTION_DATABASE_ID=...
```

The Notion database must have these properties: `Name` (title), `Description` (rich_text), `Technologies` (multi_select), `Link` (url), `GitHub` (url), `Hidden` (checkbox).

## Architecture

This is a single-page personal portfolio deployed on Vercel. It has no routes beyond `/`.

**Data flow:** `app/page.tsx` (Server Component, ISR `revalidate=600`) → `lib/notion.ts` fetches projects from Notion API → passes `Project[]` to client components. If Notion fails, the page renders with an empty projects array (no crash).

**Component split:** `components/projects-data.ts` holds the `Project` type and a static fallback array (used for reference/type only — runtime data always comes from Notion). `ProjectsMobile` and `ProjectsDesktop` are separate components loaded via `next/dynamic` to split the bundle; they render the same data with different layouts (mobile stacks cards, desktop uses a hover-reveal table).

**All heavy components are dynamically imported** (`Header`, `ProjectsMobile`, `ProjectsDesktop`, `Technical`, `Contact`) to defer JS loading.

**Dark mode is hardcoded** — `<html className="dark">` in `layout.tsx`. The `theme-toggle` component exists but is not currently used in the layout.

**Constants** for contact info live in `lib/constants.ts`. Update there to change email/social links everywhere at once.

**`lib/utils.ts`** exports only the `cn()` helper (clsx + tailwind-merge).

**`components/web-vitals.tsx`** sends Core Web Vitals via the `web-vitals` package; it's mounted in the root layout.

**`app/sitemap.ts`** generates the sitemap dynamically (single URL, no static `public/sitemap.xml`).
