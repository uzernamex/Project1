const eqArrays = require('../eqArrays');

console.log(eqArrays([88, 125, 4], [88, 125, 4]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [4, 5, 6]));
console.log(eqArrays([1, 9, 3], ["1", 9, "3"]));
console.log(eqArrays([808, 12, 4], [89, 25, 4]));
console.log(eqArrays([11, 22, 33], [11, 22, 33]));
console.log(eqArrays([100, 200, 300], [40, 50, 60]));
console.log(eqArrays([1, 9, 3], ["1", 9, "3"]));
console.log(eqArrays([99, 105, 97], [99, 105, 97]));
console.log(eqArrays([a, b, c], [a, b, c]));