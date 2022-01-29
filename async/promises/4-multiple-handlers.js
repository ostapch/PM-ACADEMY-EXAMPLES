const getUserInfo = (id) => new Promise((resolve) => {
  const users = {
    1: {
      name: 'Nick',
      age: 30,
    },
    2: {
      name: 'Mike',
      age: 25,
    },
  };

  console.dir('Waiting for response...');

  setTimeout(() => resolve(users[id]), 1500);
});

const getNick = getUserInfo(1);

getNick.then((user) => {
  console.dir(`I'm first handler for Nick ${JSON.stringify(user)}`);
});

getNick.then(() => {
  console.dir('Booooooooooring...');
});

getNick.then(() => {
  console.dir('Hello there!');
});

getNick.then((user) => {
  console.dir(`I'm one another handler for Nick ${JSON.stringify(user)}`);
});
