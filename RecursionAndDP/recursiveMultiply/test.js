const { expect } = require("chai");
const { recursiveMultiply } = require("./index");

describe(`Multiply two positive integers without using the * operator`, function() {
  it(`should correctly multiply 2 numbers together`, function() {
    expect(recursiveMultiply(2, 0)).to.equal(0);
    expect(recursiveMultiply(2, 1)).to.equal(2);
    expect(recursiveMultiply(2, 2)).to.equal(4);
    expect(recursiveMultiply(3, 5)).to.equal(15);
    expect(recursiveMultiply(8, 50)).to.equal(400);
    expect(recursiveMultiply(100, 51)).to.equal(5100);
  });
});
