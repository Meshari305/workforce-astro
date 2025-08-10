import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static'; // ✅ static adapter

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
  site: 'https://workforce.example' // update later to https://workforce.sa
});
 
