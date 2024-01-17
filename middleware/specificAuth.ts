export default defineNuxtRouteMiddleware((to, from) => {
 // THIS IS basically a psuedo code example!!!
  // with the .global suffix, this middleware is available to all routes!
  // if you don't want this to be global, specify in your specific page 
  // which middleware you want to intercept nav to the page
  // console.log('to', to);
  // console.log('from', from);
  const isLoggedIn = false;
  if (isLoggedIn) {
    // redirecto to the to! which is where they were going
    // pull fullPath from the to object
    // use built-in navigateTo to continue on to where they were going
    return navigateTo(to.fullPath)
  }
  // redirect to log in page
  return navigateTo("/login"); // or whatever page you had set up for login
} )