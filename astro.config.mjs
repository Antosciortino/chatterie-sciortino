import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chatterie-sciortino.netlify.app',
  base: '/',
  integrations: [sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
