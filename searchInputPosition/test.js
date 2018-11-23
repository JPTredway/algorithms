const expect = require("chai").expect;
const searchInsert = require("./index");

describe("Search Input Position", function() {
  it("should return a number", function() {
    const nums = [1, 2, 3, 4];
    expect(searchInsert(nums, 0)).to.be.a("number");
  });

  it("should find the target if exists", function() {
    let nums;
    nums = [1, 2, 3, 15, 20];
    expect(searchInsert(nums, 15)).to.equal(3);

    nums = [1, 2, 3, 15, 100];
    expect(searchInsert(nums, 100)).to.equal(4);

    nums = [0, 1, 2, 3];
    expect(searchInsert(nums, 0)).to.equal(0);
  });

  it("should find the position if target does not exist", function() {
    let nums;
    nums = [-100, -10, 3, 1200];
    expect(searchInsert(nums, 12)).to.equal(3);

    nums = [1, 2, 3, 4];
    expect(searchInsert(nums, 0)).to.equal(0);

    nums = [1, 2, 3, 4];
    expect(searchInsert(nums, 8)).to.equal(4);
  });
});
