const expect = require("chai").expect;
const { contiguousSequence } = require("./index");

describe("Contiguous Sequence", function() {
  it("should always return a number", function() {
    expect(contiguousSequence()).to.be.a("number");
    expect(contiguousSequence([1, 2, 3, 5])).to.be.a("number");
    expect(contiguousSequence([-1, -2, -3, -5])).to.be.a("number");
  });

  it("should return the sum of the full array when given all positive integers", function() {
    expect(contiguousSequence([1, 2, 3, 5])).to.equal(11);
    expect(contiguousSequence([0, 5, 3, 0])).to.equal(8);
    expect(contiguousSequence([0, 5, 3, 20])).to.equal(28);
  });

  it("should return the lowest number when given all negative integers", function() {
    expect(contiguousSequence([-1, -20, -3, -5])).to.equal(-1);
    expect(contiguousSequence([-5, -3])).to.equal(-3);
    expect(contiguousSequence([-5, -3, -3, -3, -3, -3])).to.equal(-3);
  });

  it("should return the largest subsequence sum when given both positive and negative integers", function() {
    expect(contiguousSequence([-1, -20, 15, -5, 6])).to.equal(16);
    expect(contiguousSequence([2, -8, 3, -2, 4, -10])).to.equal(5);
  });
});
