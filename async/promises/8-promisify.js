function promisify(f) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      const callback = (err, ...resultArgs) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(...resultArgs);
      };

      args.push(callback);

      f.apply(this, args);
    });
  };
}

const sum = (a, b, callback) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    callback(new Error('First two arguments must be numbers'));
    return;
  }

  const result = a + b;

  callback(null, result);
};

sum(15, 3, (error, result) => {
  if (error) {
    console.dir(error.message);
    return;
  }

  console.dir(result);
});

const newSum = promisify(sum);

newSum(15, 51)
  .then(console.dir)
  .catch((err) => console.dir(err.message));
