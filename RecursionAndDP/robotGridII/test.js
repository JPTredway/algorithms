const expect = require("chai").expect;
const { robotPaths } = require("./index");

describe(`Find and return a path from cell 0,0 to r-1,c-1`, function() {
  it("should find all paths", function() {
    expect(robotPaths(1)).to.equal(1);
    expect(robotPaths(2)).to.equal(2);
    expect(robotPaths(3)).to.equal(12);
    expect(robotPaths(4)).to.equal(184);
  });
});
