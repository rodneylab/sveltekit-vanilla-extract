import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), vanillaExtractPlugin(), imagetools()],
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
  define: {
    'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
  },
  ssr:
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope'],
        },
};

export default config;
