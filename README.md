# Artem Illiushchenko — Portfolio

Single-page portfolio website built with **React 19 + TypeScript + Vite** and **CSS Modules**.

**Live:** https://artemilliushchenko.github.io/JsProgramming/

## Sections

- **Hero** — name, role, summary, photo
- **Projects** — Pregnancy Tracker App (Leleka) and Rental Car App (Retail), with Frontend/Backend tabs, tech stack and links
- **Skills** — hard skills by category and soft skills
- **Education & Languages**
- **Contacts**

All content lives in [`src/data/resume.ts`](src/data/resume.ts), so updating the site means editing one file.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the build
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
