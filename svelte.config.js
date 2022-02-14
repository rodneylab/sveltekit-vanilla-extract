import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      },
      plugins: [vanillaExtractPlugin(), imagetools({ force: true })],
      ssr:
        process.env.NODE_ENV === 'development'
          ? {}
          : {
              noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope'],
            },
    },
  },
};

export default config;
