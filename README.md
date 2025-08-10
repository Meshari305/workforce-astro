# Work Force — Astro + Vercel

Bilingual (English/Arabic, RTL-aware) staffing website starter for Work Force.

## Local development
```bash
npm i
npm run dev
```

## Deploy to Vercel
1. Create a new GitHub repo and push this project.
2. In Vercel, **New Project** → import the repo.
3. Framework preset: **Astro** (auto-detected). Build command: `npm run build`. Output: `dist`.
4. After first deploy, set `site` in `astro.config.mjs` to your real domain (e.g., `https://workforce.sa`) and redeploy.

## Content
- English: `/src/pages/index.astro`
- Arabic: `/src/pages/ar/index.astro` (uses `dir="rtl"`)
- Shared layout/components in `/src/layouts` and `/src/components`

## Customization tips
- Replace `/public/favicon.svg` with your brandmark.
- Update contact forms to point to your processing backend or a form service.
- Add analytics (e.g., Vercel Analytics) if needed.
