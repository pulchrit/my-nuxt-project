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
  // we can add an alias or many to reduce the import path length
  
  // runtimeConfig is for anything sensitive, available server side-only
  // unless under the .public property
  // runtimeConfig: {
  //   // The private keys which are only available server-side
  //   apiSecret: '123',
  //   // Keys within public are also exposed client-side
  //   public: {
  //     apiBase: '/api'
  //   }
  // },
  alias: {
    // '/' is the root of this project, allows dynamic imports, OLD WAY
    // '@': resolve(__dirname, '/'), this is now a default so you can just use @
    assets: "/<rootDir>/assets",
  },
 
  // baseURL can be changed here
 
  // buildAssetDir: "/_nuxt/" is the default, relative to baseUrl
  
  // buildDir: "/<rootDir>/.nuxt' is the defualt. Sometimes you need to change
  // this if a tool assume .nuxt is a hidden directory
  
  // If you install a nuxt module, you can configure it here!
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  css: ['~/assets/main.scss'],

  // Add other extension that you want Nuxt to process, for instance graphQl
  // extensions: [".graphql", ".gql"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // You can also add your tailwind.css config here instead of in tailwind.config.js
  // You can do this for other modules
  // tailwindcss: {
  //   content: [
  //   './components/**/*.{js,vue,ts}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './plugins/**/*.{js,ts}',
  //   './app.vue',
  //   './error.vue',
  // ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
  // },
  devtools: { enabled: true },
  // temporarily turning this to spa app (or static app, you need to do this too)
  // just to show that useFecth works for both client and server side rendering, ssr: false,
});
