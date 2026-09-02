export const SITE = {
  name: "Big Bang University",
  legalName: "Evolvix Global S.L.",
  domain: "www.bigbanuniversity.es",
  url: "https://www.bigbanuniversity.es",
  email: "info@bigbanuniversity.es",
  tagline: "Business. Innovation. Impact.",
  description:
    "Escuela de negocios digital de alto rendimiento. Metodología propietaria, sistemas de IA y mentores de élite para diseñar, validar y escalar negocios rentables.",
};

/**
 * Generic webhook endpoint for lead capture forms (GoHighLevel / n8n / Make).
 * Configure per-environment via PUBLIC_WEBHOOK_URL. All three platforms accept
 * a plain JSON POST, so no vendor-specific payload shaping is required here.
 */
export const WEBHOOK_URL: string =
  import.meta.env.PUBLIC_WEBHOOK_URL ?? "https://hooks.bigbanuniversity.es/lead-capture";

export const NAV_LINKS = [
  { href: "/programas/", label: "Programas" },
  { href: "/claustro-ia/", label: "Claustro IA" },
  { href: "/la-escuela/", label: "La Escuela" },
  { href: "/becas-y-admision/", label: "Becas y Admisión" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/aviso-legal/", label: "Aviso Legal" },
  { href: "/privacidad/", label: "Política de Privacidad" },
  { href: "/politica-cookies/", label: "Política de Cookies" },
  { href: "/condiciones-uso/", label: "Condiciones de Uso" },
] as const;
