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

The Notion database must have these properties: `Name` (title), `Description` (rich_text), `Technologies` (multi_select), `Link` (url), `Hidden` (checkbox), `Order` (number — used to sort projects ascending).

## Architecture

This is a single-page personal portfolio deployed on Vercel. It has no routes beyond `/`.

**Data flow:** `app/page.tsx` (Server Component, ISR `revalidate=600`) → `lib/notion.ts` fetches projects from Notion API (sorted by `Order` ascending, filtered by `Hidden=false`) → passes `Project[]` to client components. If Notion fails, the page renders with an empty projects array and an error flag (no crash).

**Page structure:** Three full-width sections with distinct backgrounds:
1. **Hero** (`bg-background`) — `Header` (name, bio, social links) + featured project card (`projects[0]`) + scroll hint
2. **Projects** (`bg-muted`) — `ProjectsList` showing all projects as a simple list
3. **Contact** (`bg-foreground`) — `Contact` component on dark background

**Components:**
- `components/header.tsx` — static import; name, bio, social icon links from `lib/constants.ts`
- `components/projects-list.tsx` — dynamically imported; renders a bordered list of all projects (name + description + external link icon, no tech tags); handles error and empty states
- `components/contact.tsx` — dynamically imported
- `components/projects-data.ts` — holds the `Project` type (name, description, technologies, link)

**Dynamic imports:** `ProjectsList` and `Contact` are loaded via `next/dynamic` to defer JS. `Header` is imported statically.

**Dark mode is not hardcoded** — `layout.tsx` uses `<html lang="es">` without a `className`. Styles rely on CSS variables / Tailwind defaults.

**Constants** for contact info live in `lib/constants.ts`. Update there to change email/social links everywhere at once.

**`lib/utils.ts`** exports only the `cn()` helper (clsx + tailwind-merge).

**`components/web-vitals.tsx`** sends Core Web Vitals via the `web-vitals` package; it's mounted in the root layout.

**`app/sitemap.ts`** generates the sitemap dynamically (single URL, no static `public/sitemap.xml`).
