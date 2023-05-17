/*
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅ Assertion Correct! ⭐️ These values are a match ✅");
  } else {
    console.log("❌ False Assertion; These values are not a match ❌");
  }
};

assertArraysEqual([]);
*/

const middle = function(arr) {
  const i = Math.floor(arr.length / 2);
  const middleElement = arr[i];
  return middleElement;
};

const result = middle([1, 2, 3, 4, 5]);
console.log(result);