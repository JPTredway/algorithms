const chai = require("chai");
const expect = chai.expect;
const zeroSum = require("./index");

describe("ZeroSum", function() {
  it("should return a boolean", function() {
    const nums = [1, 2, 3, 4];
    expect(zeroSum(nums)).to.be.a("boolean");
  });

  it("should return true when there's a solution", function() {
    const nums = [1, 2, 3, -1];
    expect(zeroSum(nums)).to.equal(true);
  });

  it("should return false when there's no solution", function() {
    const nums = [1, 2, 3, 1];
    expect(zeroSum(nums)).to.equal(false);
  });

  it("should return false when given an empty array", function() {
    const nums = [];
    expect(zeroSum(nums)).to.equal(false);
  });

  it("should handle large arrays", function() {
    const nums = [];
    for (let i = 1; i < 500000; i++) nums.push(i);
    expect(zeroSum(nums)).to.equal(false);
  });

  it("should exit as soon as possible", function() {
    const nums = [];
    for (let i = 1; i < 500000; i++) nums.push(i);
    nums[1] = -1;
    expect(zeroSum(nums)).to.equal(true);
  });
});
