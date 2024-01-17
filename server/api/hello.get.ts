export default defineEventHandler((event) => {
  return {
    api: 'works',
  }
} )

// call this api globally with `await $fetch('/api/hello')