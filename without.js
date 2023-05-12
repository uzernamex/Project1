/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: ${actual} !== ${expected}`);
  }
};

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
*/

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  console.log(result);
};

without([67, 44, 23], [23]);

//Instruction
//Implement without which will return a subset of a given array, removing unwanted elements.

//This function should take in a source array and a itemsToRemove array. 
//It should return a new array with only those elements from source that are not present in the itemsToRemove array.

//Here are a couple examples, but please don't limit your testing to just these scenarios:

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

//Use assertArraysEqual to write test cases for various scenarios.
//The tests can be written below the definition of your function.


