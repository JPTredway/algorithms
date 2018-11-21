const expect = require("chai").expect;
const sumArray = require("./index");

describe("Zero Sum 3", function() {
  it("should return a number", function() {
    const nums = [1, 2, 3, 4];
    expect(sumArray(nums)).to.be.a("number");
  });

  it("should handle all positive numbers", function() {
    let nums;
    nums = [1, 2, 3, 15, 0];
    expect(sumArray(nums)).to.equal(21);

    nums = [1, 2, 3, 15, 100];
    expect(sumArray(nums)).to.equal(121);

    nums = [0, 0, 0, 0];
    expect(sumArray(nums)).to.equal(0);
  });

  it("should handle all negative numbers", function() {
    let nums;
    nums = [-10, -100, -3, -1200];
    expect(sumArray(nums)).to.equal(-3);

    nums = [-10000, -1400, -32000, -12];
    expect(sumArray(nums)).to.equal(-12);
  });

  it("should handle positive & negative numbers", function() {
    let nums;
    nums = [10, -100, 3, 1200];
    expect(sumArray(nums)).to.equal(1203);

    nums = [-10000, -1400, 0, -12];
    expect(sumArray(nums)).to.equal(0);

    nums = [1, 2, 3, -6, 4, 5, 6];
    expect(sumArray(nums)).to.equal(15);
  });
});
