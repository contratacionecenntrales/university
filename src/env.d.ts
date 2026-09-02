/// <reference types="astro/client" />

interface Window {
  dataLayer: Record<string, unknown>[];
}

interface ImportMetaEnv {
  readonly PUBLIC_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
