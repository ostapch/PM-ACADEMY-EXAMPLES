const sum = (a, b, callback) => {
  const restult = a + b;

  callback(restult);
};

sum(15, 51, (result) => {
  console.dir(result);
});
