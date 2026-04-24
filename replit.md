# Cádiz Film Office

## Overview
An Astro 6 website for the Cádiz Film Office. Static site built with Astro, Tailwind CSS v4, GSAP animations, Lenis smooth scroll, and `astro-icon`.

## Tech Stack
- **Framework**: Astro 6
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Package Manager**: pnpm 10
- **Runtime**: Node.js 22
- **Animations**: GSAP, Lenis
- **State**: nanostores
- **Misc**: xlsx, astro-icon, @floating-ui/dom

## Project Structure
- `src/pages/` – Astro routes
- `src/components/` – UI components
- `src/layouts/` – Page layouts
- `src/styles/` – Global styles
- `src/assets/` – Fonts and other assets
- `src/data/`, `src/stores/`, `src/lib/`, `src/types/`, `src/icons/`
- `public/` – Static assets served verbatim
- `astro.config.mjs` – Astro config

## Development
- The dev server runs via `pnpm run dev` on `0.0.0.0:5000`.
- `astro.config.mjs` enables `allowedHosts: true` and sets HMR `clientPort: 443` so the Replit iframe proxy works.

## Deployment
Configured as a **static** deployment:
- Build: `pnpm run build`
- Public dir: `dist`

## Documentation
- `docs/gsap-skills/` – Official GSAP skills (8 SKILL.md files from greensock/gsap-skills) used as reference for animation work. Versioned in git so they survive checkpoints/resets.
