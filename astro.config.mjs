import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: set to your domain (must match src/config.ts and public/CNAME)
  site: 'https://ojadili.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
