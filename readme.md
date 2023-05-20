# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @uzernamex/lotide`

**Require it:**

`const _ = require('@uzernamex/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual.js`: A function that takes in 2 values and returns true if they are equal and false if they are not.
* `assertArraysEqual.js`: This function compares two arrays and prints an appropriate message.
* `assertObjectsEqual.js`: A function that takes in 2 objects and returns true if they are equal and false otherwise.
* `countLetters.js`: This function takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly.js`: A function that takes in a collection of items and returns a specific subset of those items.
* `eqArrays.js`: This function takes 2 arrays and returns true if the arrays are equal and otherwise returns false.
* `eqObjects.js`: A function that takes in 2 objects and return true if they are equal and false otherwise.
* `findKey.js`: This function takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue.js`: A function that takes in an object and a value and returns the first key that corresponds to that value.
* `flatten.js`: This function takes an array with elements including nested arrays, and returns a flattened version of the array.
* `head.js`: This is a function that takes in an array and returns the first element in the array.
* `letterPositions.js`: A function that takes in a string and returns all indices of letter positions in the string.
* `map.js`: This function takes in an array and a callback, returns a new array based on callback results for each array item.
* `middle.js`: A function that takes in an array and returns middle most element of the array.
* `tail.js`: This function takes in an array and returns everything except the first element of the array.
* `takeUntil.js`: This function takes an array and callback and returns a slice of the array based on criteria specified in the callback.
* `without.js`: This function takes in a source array and an itemsToRemove array and returns only the items from the source array.