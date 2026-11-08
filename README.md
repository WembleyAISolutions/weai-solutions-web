# weai-solutions-web

Public homepage for **WEAI.solutions** — the missing execution layer between AI
intelligence and the real economy.

## Site structure

The public site has four lines — **Foundation · Ops · Workforce · Platforms** — plus
**Contact**. This repository is the public facade only: product facts live as typed
content records in `src/content/` (`products.ts`, `cases.ts`, `versioning.ts`) and
pages import them rather than hard-coding product names, versions or statuses. An
unconfirmed fact is omitted, never guessed. `/foundation` and `/contact` ship with
WEB-NAV-001; Ops, Workforce and Platforms are forthcoming nav labels until their
pages land. The contact form posts to `/api/contact`, which relays to the business
inbox via `CONTACT_WEBHOOK_URL` (see `.env.example`); without it the form stays off.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router) · React 19 · TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Deployed on Vercel from the `main` branch. See
[`docs/deployment/vercel.md`](docs/deployment/vercel.md) for project settings and
domain-wiring instructions. The only environment variable is `CONTACT_WEBHOOK_URL`
(Vercel only, see `.env.example`); the site builds and runs without it.

## Project structure

```
docs/public-copy-rules.md                   Six rules for what the public site may say
src/content/landing.ts                      Centralized landing copy (single source)
src/app/                                     App Router entry (layout, page, styles)
src/components/                              Homepage UI sections + intake bridge
```

## Scope & copy rules

This is the public facade only. Six rules in [`docs/public-copy-rules.md`](docs/public-copy-rules.md):
pain points not mechanisms · progress by confirmed public version only · nothing claimed as
running unless it is · product names public, codenames private · no business attribution
without Owner ruling · no commercial surfaces, AI chat or analytics.
