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
import cloudflare from '@astrojs/cloudflare';

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
  adapter: cloudflare({
    runtime: {
      mode: "local",
      type: "pages",
      bindings: {
        DB_PREVIEW: {
          type: "d1",
        },
      },
    },
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: {
        path: './.cache/wrangler/v3'
      },
    },
    imageService: 'compile'
	}),
  experimental: {
    clientPrerender: true,
    responsiveImages: true,
  },
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
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  site: 'https://coding-kittens.com',
  vite: {
    ssr: {
      external: ['util', 'stream', 'fs', 'os', 'path', 'node:fs/promises', 'events']
    }
  }
});
