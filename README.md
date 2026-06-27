# weai-solutions-web

Public homepage for **WEAI.solutions** — the missing execution layer between AI
intelligence and the real economy.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router) · React 19 · TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
docs/guardrails/landing-claims-policy.md   Editorial source of truth for all claims
src/content/landing.ts                      Centralized landing copy (single source)
src/app/                                     App Router entry (layout, page, styles)
src/components/                              Homepage UI sections + intake bridge
```

## Scope & guardrails

This is the public homepage only. Per
[`docs/guardrails/landing-claims-policy.md`](docs/guardrails/landing-claims-policy.md):

- **No commercial surfaces** — no pricing, login, API keys, dashboard, or account flow.
- **No fabricated capability** — no chatbot, AI routing, or simulated execution.
- **No runtime/API calls** — the capability intake is capture-only. It collects chip
  selections and free text, then scrolls to / populates the demo request section.
  Nothing is transmitted or processed.
- **Reference surfaces** (DryCleanOne, TaxEnd, and the emerging StoryOne / ACAPRO /
  Longfellows) are illustrative real-world domains only — not claimed as WEAI-built,
  WEAI-operated, or WEAI-executed.

All on-page copy lives in `src/content/landing.ts`; locked strings are marked there.
