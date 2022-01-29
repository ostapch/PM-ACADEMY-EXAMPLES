const getUserInfo = (id, callback) => {
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

  setTimeout(() => callback(users[id]), 1500);
};

getUserInfo(1, (user) => {
  console.dir(user);
});
