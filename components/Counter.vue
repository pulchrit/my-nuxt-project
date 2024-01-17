<script setup>
  // example using Nuxt's useState for global state
  // const counter = useCounter();

  // example using Pinia's store
  import { useCounterStoreSetup } from '@/stores/myStore';
  import { storeToRefs } from 'pinia';
  const store = useCounterStoreSetup();
  // So that the store state doesn't lose it's reactivity, you must use storeToRefs
  const { count } = storeToRefs(store);
  // You can destructure the actions directly as they are stored directly
  // on the state object! Just do so from the 'store' instance
  const { decrement, increment } = store;
</script>

<template>
  <div>
    <!-- example using Nuxt's useState -->
    <!-- Counter: {{ counter }}
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="counter++">+</button>
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="counter--">-</button> -->

    <!-- example using Pinia -->
    Counter: {{ count }}
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="increment()">+</button>
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="decrement()">-</button>
  </div>
   
</template>