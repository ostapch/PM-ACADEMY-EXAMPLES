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
    3: {
      name: 'Vasyl',
      age: 30,
    },
    4: {
      name: 'John',
      age: 33,
    },
  };

  console.dir('Waiting for response...');

  setTimeout(() => callback(users[id]), 1500);
};

const getNextUser = (nextUserId, callback) => (user) => {
  console.dir(user);

  if (nextUserId) {
    getUserInfo(nextUserId, callback);
  }
};

const fourthUserLoad = getNextUser();
const thirdUserLoad = getNextUser(4, fourthUserLoad);
const secondUserLoad = getNextUser(3, thirdUserLoad);
const firstUserLoad = getNextUser(2, secondUserLoad);

getUserInfo(1, firstUserLoad);
