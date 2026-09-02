# Big Bang University

Sitio web de Big Bang University — escuela de negocios digital, marca comercial de **Evolvix Global, S.L.**

Construido con [Astro](https://astro.build) + TypeScript + Tailwind CSS v4, salida 100% estática, con un puñado
de islas de [React](https://react.dev) (vía `@astrojs/react`) para los componentes interactivos que lo requieren
(la escena 3D del Hero). Sigue la estructura de proyecto de [shadcn/ui](https://ui.shadcn.com) — ver
`components.json` y `src/components/ui/`.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build de producción

```bash
npm run build      # type-check con astro check + build estático en dist/
npm run preview    # sirve el build de dist/ localmente
```

## Configuración de formularios (webhook)

Todos los formularios de captación (`src/components/LeadForm.astro`) envían un
`POST` con JSON a la URL definida en la variable de entorno
`PUBLIC_WEBHOOK_URL` (ver `.env.example`). Es compatible con GoHighLevel, n8n
o Make sin necesidad de adaptar el payload.

## Estructura

- `src/components/` — componentes reutilizables (Header, Footer, formularios, tarjetas de programa, ranking en vivo, etc.)
- `src/layouts/` — `Layout.astro` (base) y `LegalLayout.astro` (páginas legales)
- `src/data/` — datos de programas, claustro de IA y ranking
- `src/pages/` — rutas del sitio
- `src/config/site.ts` — configuración global (nombre, enlaces de navegación, webhook)
- `public/brand/` — logotipo en SVG vectorial (icono, wordmark, lockup completo y apilado)
- `src/components/ui/` — primitivas estilo shadcn (`card.tsx`, `spotlight.tsx`, `splite.tsx`)
- `src/lib/utils.ts` — helper `cn()` (clsx + tailwind-merge) usado por los componentes de `ui/`

## Escena 3D del Hero (Spline)

`src/components/HeroSpline.tsx` monta una escena 3D interactiva ([Spline](https://spline.design)) dentro del
Hero de la home, como isla de React (`client:visible`, solo se hidrata al hacer scroll hasta ella). Notas:

- **Solo carga en pantallas ≥768px** (`md:`) — en móvil no se descarga el runtime (~3 MB de JS/WASM), para no
  penalizar a esos visitantes.
- La URL de la escena (`DEMO_SCENE_URL` en `HeroSpline.tsx`) es una escena pública de ejemplo de Spline.
  **Debe sustituirse por una escena propia de Big Bang University** (creada en spline.design) antes de pasar a
  producción.
- Está envuelta en un `ErrorBoundary` (`src/components/ErrorBoundary.tsx`): si la escena no carga (red, bloqueador
  de anuncios, caída del servicio de Spline), el bloque cae a un fallback visual en vez de desaparecer o romper
  la página.
- `@splinetool/runtime` está fijado a la versión exacta `2.0.13` en `package.json` (sin `^`) porque las versiones
  publicadas más recientes (2.0.14 en adelante) dependen de `@splinetool/animation-core`, un paquete que no existe
  en el registro público de npm y hace fallar la instalación. Revisar si esto se ha corregido antes de actualizar
  esta dependencia.

## Notas legales

Los textos de Aviso Legal, Política de Privacidad y Política de Cookies
(`src/pages/aviso-legal`, `src/pages/privacidad`, `src/pages/politica-cookies`)
identifican a **Evolvix Global, S.L.** (CIF B21779673, domicilio en Paseo de
la Castellana nº 95, Planta 22, Tetuán, 28046 Madrid) como titular de la
marca comercial Big Bang University.
