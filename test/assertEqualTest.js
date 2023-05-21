//const assertEqual = require('../assertEqual');
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const assert = require('chai').assert;
const assertEqual  = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual([1, 2, 3]), [1, 2, 3]);
  });
});

 it("returns '5' for ['5']", () => {
    assert.strictEqual(assertEqual(['5']), '5'); 
  });
