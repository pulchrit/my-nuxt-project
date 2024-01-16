<script setup>
// definePageMeta is available globally without import
definePageMeta({
  layout: "custom",
  middleware: "specificAuth",
});
</script>

<template>
  <div class="custom page">My profile page</div>
</template>