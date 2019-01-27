const expect = require("chai").expect;
const { sortedMerge } = require("./index");

describe("Sorted Merge", function() {
  it("should merge arr2 into arr1", function() {
    const arr1 = [1, 3, 7, 10, null, null, null];
    const arr2 = [2, 5, 5];
    expect(sortedMerge(arr1, arr2)).to.deep.equal([1, 2, 3, 5, 5, 7, 10]);
  });

  it("should merge the arrays in place", function() {
    const arr1 = [1, 3, 7, 10, null, null, null];
    const arr2 = [2, 5, 5];
    sortedMerge(arr1, arr2);
    expect(arr1).to.deep.equal([1, 2, 3, 5, 5, 7, 10]);
  });

  it("should handle edge cases", function() {
    expect(sortedMerge()).to.equal(undefined);
    expect(sortedMerge([1, 2, 3])).to.deep.equal([1, 2, 3]);
    expect(sortedMerge(null, [1, 2, 3])).to.deep.equal([1, 2, 3]);
  });
});
