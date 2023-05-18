const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};

assertEqual();

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

const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letterLocation = sentence[i];
    if (letterLocation !== " ") {
      if (result[letterLocation]) {
        result[letterLocation].push(i);
      } else {
        result[letterLocation] = [i];
      }
    }
  }
  return result;
};


console.log(letterPositions("lighthouse in the house"));
console.log(assertEqual(letterPositions("lighthouse in the house")));
console.log(eqArrays(letterPositions));