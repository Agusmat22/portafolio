# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Production build to /dist
npm run preview   # Preview production build locally
npm run deploy    # Build + deploy to GitHub Pages
```

## Architecture

**Tech stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + Motion (Framer Motion) + Lenis

**Key architectural decisions:**

- **Single-page portfolio** deployed to GitHub Pages at `https://agusmat22.github.io/portafolio`. The Vite `base` option is set to this URL — don't remove it.
- **All portfolio content** (personal info, experience, skills, projects) lives in `src/data/portfolio.ts`. Translations (Spanish/English) live in `src/data/translations.ts`.
- **Language switching** is managed via `src/contexts/LanguageContext.tsx` (Context API + localStorage). Default language is Spanish (`"es"`). It also sets `document.documentElement.lang`.
- **Theme** (dark/light) managed by `next-themes` wrapped in `src/app/components/ThemeProvider.tsx`.
- **Smooth scrolling** via Lenis, wrapped in `src/app/components/SmoothScroll.tsx` — disabled when `prefers-reduced-motion` is active.
- **UI primitives** are shadcn/ui components (Radix UI) located in `src/app/components/ui/`.
- **Path alias:** `@/` maps to `src/` — use this for all imports.
- **Shared animation variants** live in `src/lib/animations.ts`. Use `useAnimatedInView` hook from `src/hooks/useAnimatedInView.ts` for scroll-triggered animations with reduced-motion support.

**Tailwind CSS v4** is loaded via the `@tailwindcss/vite` plugin (not PostCSS). The PostCSS config is intentionally empty.

## Design System — "Neo-Terminal"

- **Aesthetic:** Terminal/hacker-inspired. Monospace-heavy, CRT effects, code-style layouts.
- **Display font:** Syne (Google Fonts) — used for headings (`font-display`)
- **Body/mono font:** JetBrains Mono (Google Fonts) — used for everything else (`font-body`, `font-mono`)
- **Dark mode (primary):** Pure black `#000000` bg, `#00FF88` (electric green) accent, `#00D4FF` (cyan) secondary
- **Light mode:** Off-white `#FAFAFA` bg, `#00994D` darker green, `#0088AA` darker cyan
- **CSS variables** for all theme tokens in `src/styles/theme.css`
- **Tailwind tokens:** `terminal-green`, `terminal-cyan`, `terminal-glow`, `terminal-cyan-glow`, `surface`, `surface-elevated`, `accent-secondary`
- **Effects:** Grain overlay (`.noise-overlay`), scanline overlay (`.scanline-overlay`), `.terminal-glow`, `.cursor-blink`, `.box-glow-green`
- **Section headings** use terminal prompt style: `> section_name_` with blinking cursor
- **Badges** have custom variants: `tech` (green/mono), `status` (cyan), `tag` (outline)
- **Buttons** have `terminal` and `terminal-primary` variants
- Use `cn()` (from `@/app/components/ui/utils`) to merge Tailwind classes.
