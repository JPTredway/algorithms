const expect = require("chai").expect;
const rotateMatrix = require("./index");

describe("Rotate a Matrix 90˚ in place", function() {
  it("should rotate the matrix", function() {
    const matrix = [[0, 0, 1, 1], [1, 1, 0, 0], [0, 1, 0, 1], [1, 1, 1, 1]];
    rotateMatrix(matrix);
    expect(matrix).to.deep.equal([
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1]
    ]);
    rotateMatrix(matrix);
    expect(matrix).to.deep.equal([
      [1, 1, 1, 1],
      [1, 0, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0]
    ]);
  });

  it("should rotate an n x n matrix where n is odd", function() {
    const matrix = [
      [0, 0, 1, 1, 1],
      [1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 0, 0]
    ];
    rotateMatrix(matrix);
    expect(matrix).to.deep.equal([
      [1, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0, 1],
      [0, 0, 1, 1, 1]
    ]);
  });
});
