const createGreeting = (name, cb) => cb(`Hello, my name is ${name}!`);

createGreeting('John', (johnGreeting) => {
  console.dir(johnGreeting);
});

createGreeting('Mike', (mikeGreeting) => {
  console.dir(mikeGreeting);
});
