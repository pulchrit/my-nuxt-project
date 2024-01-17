<script setup>
  // Composable example for sayHello
  // const { sayHello } = useUtils();
  // sayHello(); // will log hello to the console using the useUtils composable

  // plugin example for sayHello
  // const { $sayHello } = useNuxtApp();
  // $sayHello("Melissa");

  // counter example for global state (uses useState in composables/state.ts)
  // const counter = useCounter();

  // counter example using Pinia state
  const store = useCounterStoreSetup();
  // console.log('store', store);

  // using the server/api/hello api endpoint
  const response = await $fetch('/api/hello');
  console.log('response', response);
</script>

<template>
  <div class="flex flex-col flex-1 mx-auto Main">
    <!-- add an icon as a local component -->
    <!-- get Vue component definition from icones.js.org, create a local component by pasting what you get 
     from the site, then use that icon as a regular component -->
    <!-- <IconsBell /> -->
   
   <!-- use processed images (assets) or purely static images (public)  -->
    <!-- use ~/assets/Lagoon_ssro900.jpg if you don't create an assets alias in next.config.js -->
    <!-- <img class="w-full" src="@/assets/Lagoon_ssro900.jpg" alt="a mostly pink nebula in space with several bright stars" /> -->
    <!-- access the file without processing by putting it in the public folder and using it from there  -->
    <!-- <img class="w-full" src="/Lagoon_ssro900.jpg" alt="a mostly pink nebula in space with several bright stars" /> -->
   
    <!-- Nuxt content module -->
    <!-- <ContentDoc /> -->

    <!-- Counter example for Nuxt shared state from useState -->
   <Counter />
</div>
</template>