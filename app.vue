<template>
  <div>
    <NuxtLayout>
      <header>
        <Header />
        <ul class="flex flex-row mx-10 my-10">
          <li>
            <NuxtLink class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 mx-6 my-6" to="/">Home</NuxtLink>
          </li>
          <li>            
            <NuxtLink class="px-4 py-3 text-white bg-blue-500 hover:bg-blue-400" to="/events">Events</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
