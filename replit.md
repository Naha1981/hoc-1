# Hands On Creatives

A SASL-led strategy consultancy website for Hands On Creatives — a Deaf-focused inclusion consultancy based in South Africa.

## Run & Operate

- `pnpm --filter @workspace/hoc-website run dev` — run the frontend (port auto-assigned)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, wouter (routing)
- Shared libs: `@workspace/api-client-react`, `@workspace/api-zod`, `@workspace/db`

## Where things live

- `artifacts/hoc-website/` — main website artifact (React + Vite)
  - `src/pages/` — page components (Index, Services, CaseStudy, Request, NotFound)
  - `src/components/Navbar.tsx` — top nav
  - `src/components/Reveal.tsx` — scroll-reveal animation component
  - `src/assets/` — images (hero, founder, team photos)
  - `src/index.css` — Tailwind + full custom theme (oklch palette, animations)

## Architecture decisions

- Converted from TanStack Router/Start (Lovable/Vercel) → wouter + plain React components
- No backend needed — contact form uses mailto: links directly
- Removed `@lovable.dev/vite-tanstack-config` (Lovable-specific plugin) — uses standard Vite + React
- All routing is client-side via wouter; base path handled via `import.meta.env.BASE_URL`
- Custom CSS theme uses oklch color space (lime-yellow accent, dark ink foreground)

## Product

Multi-page marketing/consultancy website for Hands On Creatives:
- Home page (/) — full-length landing with hero, partners, case studies, founder bio, contact form
- Services (/services) — breakdown of consultancy offerings
- Case Study (/case-study) — Hands On Kidz product deep-dive
- Request (/request) — vetted inquiry form

## Gotchas

- The `@lovable.dev/vite-tanstack-config` plugin was dropped during migration (Replit doesn't support it)
- Images live in `src/assets/` (imported via Vite) not `public/`
- Contact forms use `mailto:` links — no backend required
