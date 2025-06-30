import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import catppuccinLate from '@catppuccin/vscode/themes/latte.json';
import catppuccinMocha from '@catppuccin/vscode/themes/mocha.json';
import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import {
  transformerNotationDiff,
  transformerNotationFocus,
} from 'shikiji-transformers';
import { remarkReadingTime } from './remark/remark-reading-time.mjs';
const prettyCodeOptions = {
  keepBackground: false,
  theme: {
    dark: catppuccinMocha,
    light: catppuccinLate,
  },
  defaultLang: 'jsx',
  transformers: [transformerNotationFocus(), transformerNotationDiff()],
};

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    clientPrerender: true,
  },
  site: 'https://coding-kittens.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ca: 'ca',
        },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind(),
    react(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  output: 'static',
});
