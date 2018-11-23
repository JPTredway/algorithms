const expect = require("chai").expect;
const isValidSudoku = require("./index");

describe("Valid Sudoku", function() {
  it("should return a boolean", function() {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    expect(isValidSudoku(board)).to.be.a("boolean");
  });

  it("should handle empty boards", function() {
    const board = Array(9).fill(Array(9).fill("."));
    expect(isValidSudoku(board)).to.equal(true);
  });

  it("should handle partially filled boards", function() {
    let board;
    board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    expect(isValidSudoku(board)).to.equal(true);

    board = [
      ["8", ".", "5", "6", "3", "1", "4", "7", "."],
      [".", "2", "7", "9", "8", "4", "5", "1", "6"],
      ["4", ".", "1", ".", "5", ".", "3", ".", "8"],
      ["9", ".", "2", "8", "1", "3", ".", "6", "5"],
      [".", "8", "3", "7", ".", "5", "9", "2", "4"],
      ["7", ".", "6", "4", "2", "9", ".", ".", "3"],
      ["5", "7", ".", "1", "4", "2", "6", "3", "9"],
      ["2", "1", ".", "3", ".", "6", "8", "5", "7"],
      ["6", "3", "9", "5", "7", "8", "2", "4", "1"]
    ];
    expect(isValidSudoku(board)).to.equal(true);
  });

  it("should handle filled boards", function() {
    let board;
    board = [
      ["7", "3", "5", "8", "1", "4", "2", "9", "6"],
      ["8", "9", "6", "2", "7", "5", "3", "1", "4"],
      ["2", "1", "4", "9", "6", "3", "8", "5", "7"],
      ["5", "8", "9", "4", "2", "7", "1", "6", "3"],
      ["3", "6", "2", "1", "8", "9", "7", "4", "5"],
      ["4", "7", "1", "3", "5", "6", "9", "8", "2"],
      ["9", "2", "3", "5", "4", "1", "6", "7", "8"],
      ["6", "4", "8", "7", "9", "2", "5", "3", "1"],
      ["1", "5", "7", "6", "3", "8", "4", "2", "9"]
    ];
    expect(isValidSudoku(board)).to.equal(true);

    board = [
      ["8", "9", "5", "6", "3", "1", "4", "7", "2"],
      ["3", "2", "7", "9", "8", "4", "5", "1", "6"],
      ["4", "6", "1", "2", "5", "7", "3", "9", "8"],
      ["9", "4", "2", "8", "1", "3", "7", "6", "5"],
      ["1", "8", "3", "7", "6", "5", "9", "2", "4"],
      ["7", "5", "6", "4", "2", "9", "1", "8", "3"],
      ["5", "7", "8", "1", "4", "2", "6", "3", "9"],
      ["2", "1", "4", "3", "9", "8", "6", "5", "7"],
      ["6", "3", "9", "5", "7", "8", "2", "4", "1"]
    ];
    expect(isValidSudoku(board)).to.equal(false);
  });
});