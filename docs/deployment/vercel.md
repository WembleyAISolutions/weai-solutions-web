# Vercel Deployment Guide

Deployment and domain-wiring reference for the public **WEAI.solutions** website
(`WembleyAISolutions/weai-solutions-web`).

This document is instructions only. It does **not** deploy anything and commits no
secrets. Domain and DNS steps are written so Theresa can complete them in the Vercel
and GitHub UIs.

---

## Project settings

| Setting | Value |
| --- | --- |
| **Vercel project name** | `weai-solutions-web` |
| **Framework preset** | Next.js |
| **Install command** | `npm install` |
| **Build command** | `npm run build` |
| **Output directory** | Leave default (`.next`) |
| **Production branch** | `main` |
| **Deployment source** | GitHub repo: `WembleyAISolutions/weai-solutions-web` |
| **Environment variables** | None required for this release |

Vercel auto-detects the Next.js preset from `package.json`; the values above are listed
so they can be confirmed (not overridden) in the project settings.

## Connecting the repo (Vercel UI)

1. In Vercel, **Add New… → Project**.
2. Import the GitHub repo **`WembleyAISolutions/weai-solutions-web`** (the public site
   repo only — see warnings below).
3. Confirm **Framework preset = Next.js** and the install/build commands above.
4. Leave **Output directory** at its default.
5. Set **Production Branch = `main`** under Settings → Git.
6. Deploy. Each push to `main` then publishes to production; other branches get
   preview deployments automatically.

## Domain wiring

**Domain target candidates**

- `weai.solutions`
- `www.weai.solutions`

**Recommended primary domain:** `weai.solutions`

**Recommended redirect:** `www.weai.solutions` → `weai.solutions`

### Steps (Vercel + registrar UI — for Theresa)

1. In the Vercel project: **Settings → Domains → Add**, enter `weai.solutions`.
2. Add `www.weai.solutions` as well; Vercel will offer to **redirect `www` to the
   primary domain** — accept that so `www.weai.solutions` → `weai.solutions`.
3. Set `weai.solutions` as the **Primary Domain** in the Domains list.
4. Vercel will display the exact DNS records to create at the domain registrar /
   DNS provider. Typical pattern (use the values Vercel actually shows — they take
   precedence over this example):
   - Apex `weai.solutions` → **A record** to Vercel's anycast IP, **or** an
     `ALIAS`/`ANAME` to the Vercel target if the provider supports it.
   - `www` → **CNAME** to the Vercel target (e.g. `cname.vercel-dns.com`).
5. Add the records in the **DNS provider's UI** and wait for propagation; Vercel
   verifies and issues TLS certificates automatically.

> DNS records must be created manually in the registrar/DNS UI. This guide does not
> and must not modify DNS automatically.

## Verification (local)

These were run on the PR2 branch and pass:

```bash
npm install
npm run build   # Next.js production build — static prerender of "/"
```

The Vercel CLI may be used for a **version check only** (`vercel --version`).
Do **not** run `vercel link` or `vercel deploy` from local without explicit approval.

---

## Guardrails (must hold)

- **Do not** connect the private **`WembleyAISolutions/weai.solutions`** repo. Only the
  public `weai-solutions-web` repo is deployed.
- **Do not** copy `docs/internal` or any private architecture materials into this repo.
- **Do not** commit `.env` files, Vercel tokens, or any secrets.
- **Do not** commit the generated `.vercel/` directory (it holds project linkage and
  is git-ignored).
- **Do not** deploy production from local; production deploys come from `main` via the
  GitHub integration.
- **Do not** modify DNS records automatically — DNS changes are made by a human in the
  registrar UI.
- No environment variables or secrets are required for this release.
