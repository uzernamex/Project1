const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  console.log(result);
};


module.exports = without; 