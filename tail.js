// FUNCTION IMPLEMENTATION 
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};
*/

//Challenge

//Create a function tail which returns the everything except for the first item of the provided array.
//Your function should not modify the array that is passed in. ***It should return a new array.*** copy?

//Try out the equality checks between arrays in the node REPL to confirm the results shown below.

//[1, 2, 3] === [1, 2, 3] // => false
//[1, 2, 3] == [1, 2, 3] // => false

const tail = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.slice(1));
  }
};

tail([1, 2, 3, 4, 5, 6]);