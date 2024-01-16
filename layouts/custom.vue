<script setup>
// custom.vue layout will be used for whichever pages we specify
</script>

<template>
  <!-- These styles will be applied to all children -->
  <div class="text-white bg-orange-900 h-screen">
    <p>Custom layout</p>
    <slot />
  </div>
</template>

<style></style>