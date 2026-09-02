import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://www.bigbanuniversity.es",
  trailingSlash: "always",
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/formadores": "/claustro-ia/",
    "/cursos": "/programas/",
  },
});
