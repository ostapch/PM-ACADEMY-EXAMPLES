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

const fourthUserLoad = (fourthUser) => {
  console.dir(fourthUser);
};

const thirdUserLoad = (thirdUser) => {
  console.dir(thirdUser);

  getUserInfo(4, fourthUserLoad);
};

const secondUserLoad = (secondUser) => {
  console.dir(secondUser);

  getUserInfo(3, thirdUserLoad);
};

const firstUserLoad = (firstUser) => {
  console.dir(firstUser);

  getUserInfo(2, secondUserLoad);
};

getUserInfo(1, firstUserLoad);
