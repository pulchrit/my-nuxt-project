export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp) // this is the nuxt app context that comes from useNuxtApp()
  // make this plugin functionality available everywhere in my app
  // this is what a plugin does!
  // You use this plugin in your scripts by calling useNuxtApp!
  return {
    provide: {
      sayHello: (msg: string) => console.log(`Hello ${msg}!`),
    }
  }
});
