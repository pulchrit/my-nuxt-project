// using Options API instead of Setup
export const useCounterStoreOption = defineStore('counter', {
  // the pieces of state you need
  state: () => ({ count: 0, name: 'Guillaume' }),
  getters: {
    // akin to a computed property
    doubleCount: (state) => state.count * 2,
  },
  // akin to the methods/functions to mutate state
  actions: {
    increment() { this.count++ },
    decrement() { this.count-- },
  },
})

// use Setup API instead of Options
export const useCounterStoreSetup = defineStore('counter', () => {
  const count = ref(0) // state
  const name = ref('Eduardo') // state
  const doubleCount = computed(() => count.value * 2) // getter, computed prop
  function increment() { // action, method to mutate state
    count.value++
  }
  function decrement() {
    count.value--
  }

  return { count, name, doubleCount, increment, decrement } // must return all for pinia to track
})
