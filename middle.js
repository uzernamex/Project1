const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const middle = function(arr) {
  const i = Math.floor(arr.length / 2);
  const middleElement = arr[i];
  return middleElement;
};

module.exports = middle; 