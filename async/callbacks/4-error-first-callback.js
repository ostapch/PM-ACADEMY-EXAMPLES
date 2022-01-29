const sum = (a, b, callback) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    callback(new Error('First two arguments must be numbers'));
    return;
  }

  const result = a + b;

  callback(null, result);
};

sum(3, '5', (error, result) => {
  if (error) {
    console.dir(error.message);
    return;
  }

  console.dir(result);
});
