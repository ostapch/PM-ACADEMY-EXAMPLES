const promise = new Promise((resolve, reject) => {
  reject(new Error('Something went wrong...'));
});

promise.then(() => {
  console.dir('This is success handler');
},
(error) => {
  console.dir(error.message);
});

// promise.catch((error) => {
//   console.dir(error.message);
// });
