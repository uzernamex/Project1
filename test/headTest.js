const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});













/*
const head = require('./head');
head([3, 4, 5, 6, 7]);
head([4, 5, 6, 7]);
head(["Hello", "Lighthouse", "Labs"]), "Hello";
head(['Once', 'upon', 'a', 'time']);
head(["a", "b", "c"]);
head(["Peace", "out", "World"]);
head([10, 09, 08, 07, 06]); 
head([534, 'zsh', "Latté"]),
head([0, 1, 57]);
head(['one', 'eight', 'seven']);
*/