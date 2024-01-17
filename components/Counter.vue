<script setup>
  const counter = useCounter();
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="counter++">+</button>
    <button class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-3 my-3" @click="counter--">-</button>
  </div>
   
</template>