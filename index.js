const challenges = {};

challenges.findIntegers = function (arr) {
  // const ints = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (parseInt(arr[i]) === arr[i]) {
  //     ints.push(arr[i]);
  //   }
  // }
  // return ints;

  return arr.filter(function (num) {
    return parseInt(num) === num;
  });
};

challenges.findStrings = function (arr) {
  return arr.filter(function (string) {
    return (typeof string === 'string');
  });
};

challenges.findBooleans = function (arr) {
  return arr.filter(function (boolean) {
    return (typeof boolean === 'boolean');
  });
};

challenges.findLongWords = function (arr) {
  return arr.filter(function(string) {
    return (typeof string === 'string' && string.length > 8);
  });
};

challenges.findLargeNums = function (arr) {
  return arr.filter(function (num) {
    return (typeof num === 'number' && num > 100);
  });
};

challenges.findNamesStartingWith = function (arr, letter) {
  return arr.filter(function (string) {
    // const upperCaseLetter = letter.toUpperCase();
    // const capitalisedString = string.charAt(0).toUpperCase() + string.subString(1);
    return (typeof string === 'string' && string.startsWith(letter));
  });
};

challenges.findBobs = function (arr) {
  
};

module.exports = challenges;
