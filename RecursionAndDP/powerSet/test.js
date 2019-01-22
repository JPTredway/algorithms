const { expect } = require("chai");
const { powerSet } = require("./index");

describe(`Find all subsets of a given given set`, function() {
  it("should find all subsets", function() {
    let set = new Set("abc");

    // prettier-ignore
    expect(powerSet(set)).to.have.members(["a","ab","abc","ac","b","bc","c"]);

    set = new Set("a");
    // prettier-ignore
    expect(powerSet(set)).to.have.members(["a"]);

    set = new Set("aAb");
    // prettier-ignore
    expect(powerSet(set)).to.have.members(["a", "A", "b", "aA", "ab", "Ab", "aAb"]);
  });
});
