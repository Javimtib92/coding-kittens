import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import catppuccinLate from './shiki/themes/catppuccin-late.mjs';
import catppuccinMocha from './shiki/themes/catppuccin-mocha.mjs';
import { remarkReadingTime } from './remark/remark-reading-time.mjs';

// import {} from // transformerNotationFocus,
// // transformerNotationDiff,
// '@shikijs/transformers';

// https://astro.build/config
export default defineConfig({
  site: 'https://coding-kittens.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: {},
      experimentalThemes: {
        light: {
          ...catppuccinLate,
          bg: '#FAFAF9',
          fg: '#FAFAF9',
        },
        dark: {
          ...catppuccinMocha,
          bg: '#181B2D',
          fg: '#181B2D',
        },
      },
      transformers: [],
    },
    remarkPlugins: [remarkReadingTime],
  },
});
