const expect = require("chai").expect;
const zeroMatrix = require("./index");

describe("Zero Matrix", function() {
  it("should set all columns and rows with a zero to zero", function() {
    const matrix = [[0, 1, 1], [1, 1, 1]];
    zeroMatrix(matrix);
    expect(matrix).to.deep.equal([[0, 0, 0], [0, 1, 1]]);
    zeroMatrix(matrix);
    expect(matrix).to.deep.equal([[0, 0, 0], [0, 0, 0]]);
  });

  it("should handle matricies with no 0's", function() {
    const matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]];
    zeroMatrix(matrix);
    expect(matrix).to.deep.equal([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]);
  });

  it("should handle matricies with a single 0", function() {
    const matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 0, 1]];
    zeroMatrix(matrix);
    expect(matrix).to.deep.equal([
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [0, 0, 0]
    ]);
  });

  it("should handle edge cases", function() {
    expect(zeroMatrix()).to.equal(undefined);
  });
});
