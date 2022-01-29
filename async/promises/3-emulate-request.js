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

getUserInfo(1).then((user) => console.dir(user));
