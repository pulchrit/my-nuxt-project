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
  // const store = useCounterStoreSetup();
  // console.log('store', store);

  // using the server/api/hello api endpoint
  // const response = await $fetch('/api/hello');
  // console.log('response', response);

  // using the server/api/products endpoint with useFetch, client-side rendering or server-side rendering
  // YOU CAN destructure the data value here!
  // useFetch is async!
  // Pass in the endpoint url
  // this data (renamed to products) is a ref()!! Must access it with .value, 
  // and turn that value Proxy into a raw JS OBJECT using toRaw() to work with
  // the data in the setup script.
  // OR, you can pass the transform option to pull the data like below
  // const { data: products } = await useFetch('/api/products', {
  //   transform: (_products) => _products.data,
  //   },
  // );

  // example with useLazyFetch to show a loading indicator while data is pending
  // You need to ensure your endpoint returns a promise with a pending state!!
  const { data: products, pending } = await useLazyFetch("/api/products", {
    transform: (_products) => _products.data,
  })
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
   <!-- <Counter /> -->

   <!-- useFetch example works for both client-side rendered app and server side rendered app-->
   <!--  The products ref is automatically unwrapped in the template, just like
    any ref() -->
    <!-- this just renders the array to the screen -->
    <!-- <p>{{ products }}</p> -->

    <!-- useLazyFetch exampel with loading indicator while data is pending -->
    <p>{{  pending ? "Data is loading..." : products }}</p>
</div>
</template>