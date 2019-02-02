const expect = require("chai").expect;
const { subSort } = require("./index");

describe("Sub Sort", function() {
  it("should find the smallest sort possible", function() {
    const arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
    expect(subSort(arr)).to.deep.equal([3, 9]);
  });

  it("should return [0, 0] if array is fully sorted", function() {
    const arr = [1, 2, 4, 7, 10, 11];
    expect(subSort(arr)).to.deep.equal([0, 0]);
  });

  it("should work for small arrays", function() {
    let arr;
    arr = [1, 2];
    expect(subSort(arr)).to.deep.equal([0, 0]);
    arr = [9, 1];
    expect(subSort(arr)).to.deep.equal([0, 1]);
    arr = [9];
    expect(subSort(arr)).to.deep.equal([0, 0]);
    arr = [];
    expect(subSort(arr)).to.deep.equal([0, 0]);
  });
});
