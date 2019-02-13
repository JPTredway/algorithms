const expect = require("chai").expect;
const { shortestSupersequence } = require("./index");

describe("Shortest Supersequence", function() {
  it("should always return a tuple", function() {
    expect(shortestSupersequence([15, 30], [])).to.be.an("array");
    expect(shortestSupersequence([12, 15, 30], [8, 12])).to.be.an("array");
    expect(shortestSupersequence()).to.be.an("array");
  });

  it("should return the start and end indicies (inclusive) of the shortest subsequence", function() {
    let long, short;
    long = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7];
    short = [1, 5, 9];
    expect(shortestSupersequence(long, short)).to.deep.equal([7, 10]);

    long = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 4, 9, 2];
    short = [4, 2, 9];
    expect(shortestSupersequence(long, short)).to.deep.equal([14, 16]);
  });
});
