// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let arrFirst = arr[0];
  console.log(arrFirst);
};

//Create a function head which returns the FIRST ITEM in the array.
//The head function should simply return the element itself [not an array].

//Instructions
//Use assertEqual to write test cases for various scenarios.
//The tests can be written below the function definition.

//Test Code:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//ALSO... An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head