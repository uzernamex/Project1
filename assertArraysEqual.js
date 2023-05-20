const eqArrays = require('../eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Correct! ⭐️ These values are a match ✅");
  } else {
    console.log("❌ False Assertion; These values are not a match ❌");
  }
};

module.exports = assertArraysEqual;