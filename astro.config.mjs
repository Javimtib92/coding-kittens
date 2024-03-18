import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import catppuccinLate from '@catppuccin/vscode/themes/latte.json';
import catppuccinMocha from '@catppuccin/vscode/themes/mocha.json';
import { remarkReadingTime } from './remark/remark-reading-time.mjs';
import rehypePrettyCode from 'rehype-pretty-code';
import {
  transformerNotationFocus,
  transformerNotationDiff,
} from 'shikiji-transformers';
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
  site: 'https://www.coding-kittens.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
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
