/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};
/*/

/*

While working more with objects recently, we've created functions that return objects. 
We realized that assertEqual can really only be used for checking primitive return types.

It's time to do the same for objects now, starting with eqObjects. 
This function implementation will require us to further practice problem solving through object key iteration again. Fun times!

It would be nice to make use of our handy assertEqual function. Copy it from its source file and paste it in to the top of eqObjects.js. 

Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

Instruction: Copy/paste our eqArrays function into this file.

Inside of our eqObjects function, we will be able to call eqArrays whenever we encounter arrays.

*/

const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false