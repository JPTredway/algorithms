const expect = require("chai").expect;
const { robotGrid } = require("./index");

describe(`Find and return a path from cell 0,0 to r-1,c-1`, function() {
  it("should handle square boards", function() {
    //prettier-ignore
    expect(robotGrid(2, 2)).to.deep.equal(
      [[0, 0], [1, 0], [1, 1]]
    );
    //prettier-ignore
    expect(robotGrid(3, 3)).to.deep.equal(
      [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]
    );
    //prettier-ignore
    expect(robotGrid(4, 4)).to.deep.equal(
      [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [3,3]]
    );
  });

  it("should handle bad cells", function() {
    //prettier-ignore
    expect(robotGrid(2, 2, [[1, 0]])).to.deep.equal(
      [[0, 0], [0, 1], [1, 1]]
    );
    //prettier-ignore
    expect(robotGrid(3, 3, [[1, 0], [1, 1]])).to.deep.equal(
      [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]
    );
    //prettier-ignore
    expect(robotGrid(3, 3, [[1, 0], [1, 1], [2, 2]])).to.deep.equal([]);
  });

  it("should handle rectangular boards", function() {
    //prettier-ignore
    expect(robotGrid(2, 5, [[1, 0]])).to.deep.equal(
      [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3], [1, 4]]
    );
    //prettier-ignore
    expect(robotGrid(1, 10)).to.deep.equal(
      [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]]
    );
    //prettier-ignore
    expect(robotGrid(1, 5, [[0, 0]])).to.deep.equal(
      []
    );
  });
});
