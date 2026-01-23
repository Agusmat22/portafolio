# Portfolio - Agustín García Navas

Portafolio profesional ultra moderno para desarrollador Backend & Cloud Engineer con foco en AI Solutions.

## 🚀 Tech Stack

- **Framework:** React 18.3 + Vite 6
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Componentes UI:** shadcn/ui (Radix UI)
- **Animaciones:**
  - Motion (Framer Motion) para microinteracciones y scroll-driven animations
  - Lenis para smooth scrolling tipo Apple
- **Iconos:** Lucide React + React Icons (Simple Icons)
- **Tema:** next-themes (Dark/Light mode)
- **Imágenes:** Optimizadas con componente ImageWithFallback

## ✨ Características

### Diseño 2026 Minimalista
- Estética premium tech con mucho espacio en blanco/negro
- Gradientes animados sutiles
- Glass morphism discreto
- Bordes suaves y sombras elegantes
- Paleta monocroma con acentos violeta/cyan

### Animaciones Avanzadas
- **Hero scroll-driven:** Elementos que se transforman al scrollear con scale, blur, parallax
- **Spotlight effect:** Sigue el cursor en cards de proyectos
- **Stagger animations:** Entrada secuencial de elementos
- **3D Tilt hover:** En cards de proyectos con efecto de profundidad
- **Scroll progress:** Barra de progreso minimal en la parte superior
- **Smooth scrolling:** Implementado con Lenis
- **Respeta prefers-reduced-motion:** Animaciones reducidas para accesibilidad

### Secciones

1. **Hero**
   - Foto de perfil con glow animado
   - Headline y subheadline con keywords técnicas
   - CTAs principales (Ver Proyectos, Contactar, LinkedIn)
   - Badge de ubicación
   - Scroll indicator animado

2. **About / Perfil Profesional**
   - Descripción profesional premium
   - Destacado de liderazgo técnico
   - Cards con iconos y gradientes

3. **Experiencia Laboral**
   - Timeline vertical animada
   - Highlights organizados por categorías
   - Chips de tecnologías utilizadas
   - Transiciones smooth

4. **Skills / Habilidades Técnicas**
   - Organizadas por categorías (Development, Cloud & DevOps, AI, etc.)
   - Logos de cada tecnología (Simple Icons)
   - Tooltips con nivel de experiencia
   - Grid responsive y hover effects

5. **Proyectos Destacados**
   - Cards con 3D tilt effect
   - Spotlight que sigue el cursor
   - Tags de stack tecnológico
   - Hover animations premium

6. **Educación & Idiomas**
   - Formación académica con estado (En curso)
   - Nivel de idiomas con badges
   - Layout en 2 columnas

7. **Contacto**
   - Información de contacto completa
   - Links a LinkedIn y GitHub
   - CTA fuerte con botones de acción
   - Diseño enfocado en conversión

### Header Sticky
- Navegación con smooth scroll
- Toggle Dark/Light mode
- Botón LinkedIn
- Menu mobile responsive
- Backdrop blur cuando hace scroll

### Footer Minimal
- Links rápidos
- Redes sociales
- Copyright y tecnologías utilizadas

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias (ya están instaladas)
# npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### Datos del Portfolio

Todos los datos están centralizados en `/src/data/portfolio.ts`. Edita este archivo para actualizar:
- Información personal
- Experiencia laboral
- Skills y tecnologías
- Proyectos
- Educación
- Idiomas

Si necesitas cambiarla, reemplaza la imagen en la carpeta de assets y actualiza la importación.

### Colores y Tema

Los colores principales están definidos en `/src/styles/theme.css`:
- Violeta: `rgb(139, 92, 246)` / `#8B5CF6`
- Cyan: `rgb(6, 182, 212)` / `#06B6D4`

Para cambiar la paleta de colores, modificar las variables CSS en el archivo theme.css.


## ♿ Accesibilidad

- Navegación por teclado completa
- Contraste correcto (WCAG AA)
- ARIA labels en elementos interactivos
- Respeto por `prefers-reduced-motion`
- Estructura semántica HTML5

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Imágenes optimizadas para diferentes tamaños
- Touch-friendly en dispositivos móviles

## 🔧 Estructura del Proyecto

```
/src
  /app
    /components      # Componentes React
      - Hero.tsx
      - About.tsx
      - Experience.tsx
      - Skills.tsx
      - Projects.tsx
      - Education.tsx
      - Contact.tsx
      - Header.tsx
      - Footer.tsx
      - ScrollProgress.tsx
      - SmoothScroll.tsx
      - ThemeProvider.tsx
      /ui            # Componentes UI de shadcn
    App.tsx          # Componente principal
  /data
    portfolio.ts     # Datos del portfolio (EDITABLE)
  /styles
    index.css        # Estilos globales
    theme.css        # Variables de tema
    tailwind.css     # Config Tailwind
    fonts.css        # Fuentes personalizadas
```

## 🎯 Performance

- Lazy loading de secciones pesadas
- Animaciones optimizadas con transform y opacity
- Imágenes con loading lazy
- Code splitting automático con Vite
- Bundle optimizado para producción

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---
