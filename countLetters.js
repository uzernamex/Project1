const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭐️ Assertion Passed ⭐️💫😁: + " " + ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`😡 Assertion Failed ❌😡🤬: + " " + ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const countCharacters = {};
  for (let character of str) {
    if (character !== " ") {
      if (countCharacters[character]) {
        countCharacters[character]++;
      } else {
        countCharacters[character] = 1;
      }
    }
  }
  return {countCharacters};
};

countLetters("lighthouse in the house");
console.log(countLetters("lighthouse in the house"));

assertEqual();