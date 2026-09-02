# Big Bang University

Sitio web de Big Bang University — escuela de negocios digital, marca comercial de **Bolvis Global S.L.**

Construido con [Astro](https://astro.build) + TypeScript + Tailwind CSS v4, salida 100% estática.

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

## Notas legales

Los textos de Aviso Legal, Política de Privacidad y Política de Cookies
(`src/pages/aviso-legal`, `src/pages/privacidad`, `src/pages/politica-cookies`)
identifican a **Bolvis Global S.L.** como titular. El CIF se ha dejado como
marcador de posición (`B-XXXXXXXX`) pendiente de validación definitiva antes
de publicar el sitio en producción.
