# Portfolio - Agustín García Navas

Portafolio profesional para desarrollador Backend & Cloud Engineer con foco en AI Solutions. Diseño **Neo-Terminal**: estética terminal/hacker con efectos CRT, tipografía monospace y paleta verde eléctrico/cyan.

🌐 **Live:** [agusmat22.github.io/portafolio](https://agusmat22.github.io/portafolio)

## 🚀 Tech Stack

- **Framework:** React 18 + Vite 6
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (vía plugin `@tailwindcss/vite`, sin PostCSS)
- **Componentes UI:** shadcn/ui (Radix UI) — ubicados en `src/app/components/ui/`
- **Animaciones:**
  - Motion (Framer Motion) para microinteracciones y scroll-driven animations
  - Lenis para smooth scrolling con soporte `prefers-reduced-motion`
- **Iconos:** Lucide React + React Icons (Simple Icons)
- **Tema:** next-themes (Dark/Light mode)
- **i18n:** Context API propio — soporte Español / English con persistencia en `localStorage`

## ✨ Características

### Diseño Neo-Terminal

- Estética terminal/hacker: monospace-heavy, prompts de CLI, brackets de navegación
- **Modo oscuro (principal):** Fondo negro puro `#000000`, acento verde eléctrico `#00FF88`, cyan `#00D4FF`
- **Modo claro:** Fondo `#FAFAFA`, verde oscuro `#00994D`, cyan oscuro `#0088AA`
- Fuente display: **Syne** (Google Fonts) — títulos y headings
- Fuente cuerpo/mono: **JetBrains Mono** (Google Fonts) — todo el texto
- Efectos CRT: overlay de grain (`.noise-overlay`) + scanlines (`.scanline-overlay`)
- Efecto **Matrix Rain** de fondo: caracteres japoneses + alfanuméricos en canvas
- Section headings con estilo de prompt: `> section_name_` con cursor parpadeante

### Animaciones

- **Hero scroll-driven:** Elementos con scale, opacity y parallax al scrollear
- **TypewriterText:** Efecto de escritura en tiempo real para el headline
- **Stagger animations:** Entrada secuencial de elementos con variantes compartidas
- **Line draw:** Animación de timeline vertical con `scaleY`
- **Clip reveal:** Revelado de texto estilo typewriter con `clipPath`
- **Smooth scrolling:** Lenis — deshabilitado con `prefers-reduced-motion`
- **Variantes compartidas** en `src/lib/animations.ts` + hook `useAnimatedInView`

### Internacionalización (i18n)

- Idiomas: **Español** (default) y **English**
- Toggle en el header (`ES` / `EN`)
- Persistencia en `localStorage`, sincroniza `document.documentElement.lang`
- Traducciones centralizadas en `src/data/translations.ts`

### Secciones

1. **Hero** — Foto de perfil con glow, headline con TypewriterText, CTAs, badge de ubicación
2. **About** — Descripción profesional, cards con iconos
3. **Experiencia** — Timeline animado con highlights y chips de tecnologías
4. **Skills** — Grid por categorías con logos (Simple Icons), tooltips de nivel
5. **Proyectos** — Cards con tags de stack y hover animations
6. **Educación & Idiomas** — Formación académica y nivel de idiomas con badges
7. **Contacto** — Links a LinkedIn/GitHub, CTAs de conversión

### Header

- Sticky con `backdrop-blur` al hacer scroll
- Navegación con estilo bracket: `[item]`
- Toggle Dark/Light mode + Language toggle (ES/EN)
- Botón LinkedIn
- Menú mobile full-screen con animaciones stagger

## ♿ Accesibilidad y Seguridad

- **Skip to main content:** Enlace visible al focus para navegación por teclado
- **`focus-visible:ring`** en todos los elementos interactivos para navegación por teclado
- **`prefers-reduced-motion`:** MatrixRain y todas las animaciones respetan esta preferencia
- **Eventos pasivos:** `{ passive: true }` en event listeners de scroll
- **WCAG AA:** Contraste correcto en dark y light mode
- **ARIA labels** en elementos interactivos
- **Estructura semántica HTML5:** `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`
- **Sin `dangerouslySetInnerHTML`:** Todo el contenido se renderiza de forma segura

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Menú mobile con overlay full-screen
- Touch-friendly en dispositivos móviles

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview del build local
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

## 🎨 Personalización

### Datos del Portfolio

Todo el contenido (info personal, experiencia, skills, proyectos, educación) vive en `src/data/portfolio.ts`.

### Traducciones

Los textos de la UI en ambos idiomas están en `src/data/translations.ts`.

### Colores y Tema

Los colores están definidos como variables CSS en `src/styles/theme.css`:

| Token | Dark mode | Light mode |
|---|---|---|
| `terminal-green` | `#00FF88` | `#00994D` |
| `terminal-cyan` | `#00D4FF` | `#0088AA` |
| `background` | `#000000` | `#FAFAFA` |
| `surface` | `#0D0D0D` | `#F0F0F0` |

### Animaciones

Las variantes de Motion compartidas están en `src/lib/animations.ts`. Usa el hook `useAnimatedInView` de `src/hooks/useAnimatedInView.ts` para animaciones disparadas por scroll con soporte de `prefers-reduced-motion`.

## 🔧 Estructura del Proyecto

```
/src
  /app
    /components        # Componentes React
      - Hero.tsx       # Hero con TypewriterText + scroll-driven
      - About.tsx
      - Experience.tsx # Timeline animado
      - Skills.tsx
      - Projects.tsx
      - Education.tsx
      - Contact.tsx
      - Header.tsx     # Sticky + i18n toggle + dark mode
      - Footer.tsx
      - MatrixRain.tsx # Efecto canvas de fondo
      - ScrollProgress.tsx
      - SmoothScroll.tsx
      - ThemeProvider.tsx
      /ui              # Componentes shadcn/ui (Radix UI)
    App.tsx            # Root — skip-to-content + overlays CRT
  /contexts
    LanguageContext.tsx # Proveedor de i18n (ES/EN)
  /data
    portfolio.ts       # Contenido del portfolio (EDITABLE)
    translations.ts    # Textos ES/EN
  /hooks
    useAnimatedInView.ts # Hook para animaciones scroll-triggered
  /lib
    animations.ts      # Variantes Motion compartidas + prefersReducedMotion
    constants.ts       # SECTION_IDS + NAV_LINKS
  /styles
    index.css          # Estilos globales + efectos CRT
    theme.css          # Variables CSS del tema Neo-Terminal
    tailwind.css       # Config Tailwind
    fonts.css          # Fuentes Google (Syne + JetBrains Mono)
```

## 🎯 Performance

- Lazy loading implícito por Vite (code splitting automático)
- Animaciones optimizadas con `transform` y `opacity` (compositor CSS)
- MatrixRain con `requestAnimationFrame` y cap de FPS (24fps)
- Canvas resize con `ResizeObserver` eficiente
- Smooth scrolling con Lenis deshabilitado en `prefers-reduced-motion`

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---
