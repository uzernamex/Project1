const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without   = require('./without');
const assertObjectsEqual   = require('./assertObjectsEqual');
const flatten = require('./flatten');
const eqArrays   = require('./eqArrays');
const countLetters   = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects   = require('./eqObjects');
const findKey   = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions   = require('./letterPositions');
const map   = require('./map');
const takeUntil = require('./takeUntil');

const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual   = require('./assertEqual');

module.exports = {

  head:   head,
  tail:   tail,
  middle: middle,  
  without: without, 
  assertEqual: assertEqual, 
  assertObjectsEqual: assertObjectsEqual, 
  assertArraysEqual: assertArraysEqual, 
  flatten: flatten, 
  countLetters: countLetters, 
  countOnly: countOnly, 
  letterPositions: letterPositions, 
  findKey: findKey, 
  findKeyByValue: findKeyByValue, 
  eqArrays: eqArrays, 
  map: map, 
  takeUntil: takeUntil
  
};

