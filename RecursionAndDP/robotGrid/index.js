/*
Imagine a robot sitting on the upper left corner
of grid with r rows and c columns. The robot can
only move in two directions, right and down, but
certain cells are "off limits" such that the
robot cannot step on them. Design an algorithm to
find a path for the robot from the top left to the
bottom right.
*/

const makeBoard = (r, c) => {
  return new Array(r).fill(0).map(r => new Array(c).fill(0));
};

const markBadCells = (board, badCells) => {
  for (let i = 0; i < badCells.length; i++) {
    board[badCells[i][0]][badCells[i][1]] = 1;
  }
};

const robotGrid = (r, c, badCells = []) => {
  if (!r || !c) return [];
  const board = makeBoard(r, c);
  markBadCells(board, badCells);

  const path = [];
  const subroutine = (row, col) => {
    board[row][col] = 1;
    path.push([row, col]);

    let foundPath = row === r - 1 && col === c - 1;

    if (!foundPath && board[row + 1] && board[row + 1][col] === 0) {
      foundPath = subroutine(row + 1, col);
    }

    if (!foundPath && board[row][col + 1] === 0) {
      foundPath = subroutine(row, col + 1);
    }

    if (!foundPath) {
      path.pop();
    }

    return foundPath;
  };
  if (board[0][0] === 0) subroutine(0, 0);

  return path;
};

module.exports = { robotGrid };
