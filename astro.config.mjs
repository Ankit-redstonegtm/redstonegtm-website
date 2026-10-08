import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { loadEnv } from 'vite';

const fileEnv = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), 'PUBLIC_');
const site = (process.env.PUBLIC_SITE_URL || fileEnv.PUBLIC_SITE_URL || 'https://redstonegtm.com').replace(
  /\/$/,
  '',
);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/api/'),
    }),
  ],
});
