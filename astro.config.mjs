// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  base: "/intern",
  outDir: "./intern",
  integrations: [
    react(), 
    AstroPWA({
      mode: 'development',
      base: '/intern',
      scope: '/',
      // includeAssets: ['favicon.svg'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Astro PWA',
        short_name: 'Astro PWA',
        theme_color: '#ffffff',
      },
      // pwaAssets: {
      //   config: true,
      // },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      }
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // alias icons to their ESM version
        '@mui/icons-material': '@mui/icons-material/esm',
      },
    },
    ssr: {
      noExternal: /@mui\/.*?/,
    },
  },
});