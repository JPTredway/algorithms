const expect = require("chai").expect;
const zeroSum3 = require("./index");

describe("Zero Sum 3", function() {
  it("should return a boolean", function() {
    const nums = [1, 2, 3, 4];
    expect(zeroSum3(nums)).to.be.a("boolean");
  });

  it("should return true when there's a solution", function() {
    const nums = [1, 2, 3, -1, 0];
    expect(zeroSum3(nums)).to.equal(true);
  });

  it("should return false when there's no solution", function() {
    const nums = [1, -1, 3, 1];
    expect(zeroSum3(nums)).to.equal(false);
  });

  it("should return false when given an empty array", function() {
    const nums = [];
    expect(zeroSum3(nums)).to.equal(false);
  });

  it("should handle large arrays", function() {
    const nums = [];
    for (let i = 0; i < 10000; i++) nums.push(i);
    expect(zeroSum3(nums)).to.equal(false);
  });
});
