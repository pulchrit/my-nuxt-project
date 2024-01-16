<script setup>
  // default.vue layout will be used for all pages by default
</script>

<template>
  <!-- These styles will be applied to all children -->
  <div class="text-white bg-slate-900 h-screen">
    <p>Default layout</p>
    <slot />
  </div>
</template>

<style>

</style>