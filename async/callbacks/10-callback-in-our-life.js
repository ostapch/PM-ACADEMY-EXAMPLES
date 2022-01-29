/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */

Array.prototype.pmAcademyFilter = function (callback) {
  const resultArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultArr.push(this[i]);
    }
  }

  return resultArr;
};

const numbers = [1, 5, 24, 889, 12, 59];

const evenNumbers = numbers.pmAcademyFilter((number) => number % 2 === 0);

console.dir(evenNumbers);
