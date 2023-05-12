//Copy your assertEqual function from its source file into this new file.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: ${actual} !== ${expected}`);
  }
};

//Implement eqArrays

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

//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
//console.log(eqArrays([1, 2, 3], [1, 2, 4])); // false
//console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]))); // => should PASS
assertEqual(eqArrays([88, 125, 4],[88, 125, 4]), true);
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1, 2, 3],[4, 5, 6]), false);
assertEqual(eqArrays([1, 9, 3],["1", 9, "3"]), false);

/*
const eqArrays = function(arr1, arr2) {
  if ([arr1[0] === arr2[0]] && [arr1[1] === arr2[1]] && [arr1[2] === arr2[2]]) {
    console.log ('true');
  } else
  if ((arr1[0] !== arr2[0]) || [arr1[1] !== arr2[1]] || [arr1[2] !== arr2[2]]) {
    console.log('false');
}
};

//check length of both arr
// return false
// loop array

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
//array.forEach(element => {
*/