import data from './products.json'
// products.json is the faux db

// this is the simple endpoint that doesn't track a pending state
// export default defineEventHandler(() => {
//   return {
//     data,
//   }
// });

// this is the version that returns a Promise so we can track a pending state
// this uses a setTimeout to mimic a delayd db call
export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
})
