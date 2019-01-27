const expect = require("chai").expect;
const { groupAnagrams } = require("./index");

describe("Group Anagrams", function() {
  it("should move 2 anagrams next to each other", function() {
    const arr = ["care", "dare", "race", "cab", "rack", "abc"];
    groupAnagrams(arr);

    const abc = arr.indexOf("abc");
    const cab = arr.indexOf("cab");
    expect(Math.abs(abc - cab)).to.equal(1);

    const race = arr.indexOf("race");
    const care = arr.indexOf("care");
    expect(Math.abs(race - care)).to.equal(1);
  });

  it("should group multiple anagrams", function() {
    const arr = ["care", "dare", "race", "cab", "rack", "acre", "abc"];
    groupAnagrams(arr);
    //prettier-ignore
    expect(arr).to.deep.equal(["rack", "cab", "abc", "dare", "care", "race", "acre"]);
  });

  it("should handle edge cases", function() {
    const arr = [];
    groupAnagrams(arr);
    //prettier-ignore
    expect(arr).to.deep.equal([]);
    expect(groupAnagrams()).to.equal(undefined);
  });
});
