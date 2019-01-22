/*
  A robot located at the top left corner of an n x n grid is trying 
  to reach the bottom right corner. The robot can move either up, down, 
  left, or right, but cannot visit the same spot twice. How many 
  possible unique paths are there to the bottom right corner? Make 
  your solution work for a grid of any size.
*/

const makeBoard = n => new Array(n).fill(0).map(r => new Array(n).fill(0));

const robotPaths = n => {
  const board = makeBoard(n);
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let paths = 0;

  const subroutine = (row, col) => {
    if (row === n - 1 && col === n - 1) {
      paths++;
      return;
    }

    board[row][col] = 1;

    dirs.forEach(([r, c]) => {
      if (board[row + r] && board[row + r][col + c] === 0) {
        subroutine(row + r, col + c);
      }
    });

    board[row][col] = 0;
  };
  subroutine(0, 0);

  return paths;
};

module.exports = { robotPaths };
