const getUserInfo = (id) => new Promise((resolve, reject) => {
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

  setTimeout(() => {
    if (!users[id]) {
      reject(new Error(`User with id ${id} does not exist.`));
    }

    resolve(users[id]);
  }, 1500);
});

getUserInfo(13)
  .finally((user) => {
    console.dir(user);
  });
