const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  let i = 0;
  const key = key[i];
  for (let i = 0; i < key.length; i++) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};
  
console.log(findKeyByValue())

const bestTVShowsByGenre = { 
sci_fi: "The Expanse",
comedy: "Brooklyn Nine-Nine",
drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");