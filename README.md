# Portafolio — Agustín García Navas

Portafolio personal de desarrollador Backend & Cloud Engineer con foco en AI Solutions.

**Demo en vivo:** [agusmat22.github.io/portafolio](https://agusmat22.github.io/portafolio)

---

## Tech Stack

- **React 18** + **Vite 6** + **TypeScript**
- **Tailwind CSS v4** para estilos
- **shadcn/ui** (Radix UI) para componentes
- **Motion** (Framer Motion) para animaciones
- **Lenis** para smooth scrolling
- **next-themes** para Dark/Light mode

## Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

## Estructura del proyecto

```
src/
├── app/
│   ├── components/       # Componentes de cada sección
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── App.tsx
├── data/
│   └── portfolio.ts      # Datos del portafolio (editar aquí)
└── styles/
    └── index.css
```

## Personalización

Todos los datos del portafolio (nombre, experiencia, proyectos, skills, etc.) están centralizados en `src/data/portfolio.ts`. Solo edita ese archivo para actualizar el contenido.

## Licencia

Uso personal. Todos los derechos reservados.
