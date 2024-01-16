import { resolve } from 'path'; // needed to create alias

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // auto import works for components and some other things
  // we can add an alias
  alias: {
    '@': resolve(__dirname, '/'), // '/' is the root of this project, allows dynamic imports
  },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
});
