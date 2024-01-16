import { resolve } from 'path'; // needed to create alias

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // auto import works for components and some other things
  // we can add an alias
  alias: {
    // '/' is the root of this project, allows dynamic imports, OLD WAY
    // '@': resolve(__dirname, '/'), 
    assets: "/<rootDir>/assets",
  },
  // If you intall a nuxt module, you can configure it here!
  modules: [
    '@nuxt/content',
  ],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
});
