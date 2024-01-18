import { resolve } from 'path'; // needed to create alias

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // define app.head to add a head that will be used for EVERY page of your app
  // probably best to use useHead instead to customize for every page.
  // app: {
  //   head: {
  //     title: "Nuxt course from Guillaume",
  //     meta: [
  //       { 
  //         name: "description",
  //         content: "Excellent Nuxt course",

  //       }
  //     ],
  //   },
  // },
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
    '@pinia/nuxt',
  ],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  // temporarily turning this to spa app (or static app, you need to do this too)
  // just to show that useFecth works for both client and server side rendering, ssr: false,
});
