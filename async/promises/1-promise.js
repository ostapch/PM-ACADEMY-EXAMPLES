const promise = new Promise((resolve) => {
  resolve(1);
});

promise.then((data) => {
  console.dir(data);
});
