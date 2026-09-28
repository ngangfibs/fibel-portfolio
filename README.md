# fibel. — Ngang Fibel Awah

Personal portfolio website — full-stack developer, data scientist & creative technologist based in Bamenda, Cameroon, working worldwide.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3
- react-router (hash routing, static-host friendly)
- Inter Tight / Instrument Serif via Google Fonts

## Pages

- `/` — hero, featured work, craft strips
- `/#/works` — filterable project archive (Web · Bots & Automation · Mobile)
- `/#/about` — story, off the clock, experience & credentials

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

The build uses `base: './'` and hash routing, so `dist/` can be hosted on any static host (GitHub Pages, Netlify, a bucket) with no server rewrites.

## Edit content

- Projects: `src/data/projects.ts`
- Experience & bio: `src/pages/About.tsx`
- Social links & footer: `src/components/Footer.tsx`
- Project "screenshots" are code-drawn UI sketches in `src/components/Mock.tsx` — no image assets to break.

© Ngang Fibel Awah
