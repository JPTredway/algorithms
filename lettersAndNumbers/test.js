const expect = require("chai").expect;
const { longestSubArr } = require("./index");

describe("Letters and Numbers", function() {
  it("should return an array", function() {
    expect(longestSubArr([12, 0])).to.be.an("array");
    expect(longestSubArr(["a", "b"])).to.be.an("array");
    expect(longestSubArr(["a", 9, "c"])).to.be.an("array");
  });

  it("should find a balanced subarray if one exists", function() {
    let arr;

    arr = [12, "a", 0];
    expect(longestSubArr(arr)).to.deep.equal([12, "a"]);

    arr = [12, "a", 0, 12, "b"];
    expect(longestSubArr(arr)).to.deep.equal(["a", 0, 12, "b"]);

    arr = ["a", "a", 8, "a", "b"];
    expect(longestSubArr(arr)).to.deep.equal(["a", 8]);
  });

  it("should return an empty array if no balanced subarray exists", function() {
    let arr;

    arr = [12, 90, 0];
    expect(longestSubArr(arr)).to.deep.equal([]);

    arr = ["a", "a", "a", "a", "b"];
    expect(longestSubArr(arr)).to.deep.equal([]);

    expect(longestSubArr()).to.deep.equal([]);
  });
});
