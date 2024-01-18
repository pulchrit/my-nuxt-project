<script setup lang="ts">
// definePageMeta is available globally without import
  definePageMeta({
    layout: "custom",
    middleware: "specific-auth",
  });
</script>

<template>
  <div class="custom page">My profile page</div>
</template>