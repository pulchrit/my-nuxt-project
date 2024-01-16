<template>
  <div class="flex flex-col flex-1 Main">
    <!-- get Vue component definition from icones.js.org, create a local component by pasting what you get 
     from the site, then use that icon as a regular component -->
    <IconsBell />
    <h1>Hello Nuxt 3 Index page</h1>
    <!-- use ~/assets/Lagoon_ssro900.jpg if you don't create an assets alias in next.config.js -->
    <!-- <img class="w-full" src="@/assets/Lagoon_ssro900.jpg" alt="a mostly pink nebula in space with several bright stars" /> -->
    <!-- access the file without processing by putting it in the public folder and using it from there  -->
    <img class="w-full" src="/Lagoon_ssro900.jpg" alt="a mostly pink nebula in space with several bright stars" />
</div>
</template>