import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ojadili.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
