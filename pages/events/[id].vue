<script setup>
  // useNuxtApp (built-in composable)gives us access to Nuxt app runtime context globally
  // available on client and server
  const nuxt = useNuxtApp();
  // const route = useRoute();
  // console.log(nuxt)
</script>

<template>
  <!-- $route.params pulls the route object from the url -->
  <div>event id: {{  $route.params.id }}</div>
</template>