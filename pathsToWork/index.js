// You live at (0,0) coordinate on a map, and your work is located at
// e units east and s units south from where you live.
//
// Assuming that you can only travel east and south, return the number
// of possible unique paths to take to work.

class Board {
  constructor(col, row) {
    this.board = [];

    for (let i = 0; i <= row; i++) {
      const row = [];
      for (let j = 0; j <= col; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = this.board[row][col] ? 0 : 1;
  }

  isValidMove(row, col) {
    return (
      row < this.board.length &&
      col < this.board[0].length &&
      !this.board[row][col]
    );
  }

  pathsToWork(e, s) {
    let totalPaths = 0;

    const generatePaths = (row = 0, col = 0) => {
      if (row === s && col === e) return totalPaths++;

      this.togglePiece(row, col);

      // check one to the east
      if (this.isValidMove(row, col + 1)) {
        generatePaths(row, col + 1);
      }

      // check one to the south
      if (this.isValidMove(row + 1, col)) {
        generatePaths(row + 1, col);
      }

      this.togglePiece(row, col);
    };
    generatePaths();

    return totalPaths;
  }
}

const pathsToWork = (e, s) => new Board(e, s).pathsToWork(e, s);

module.exports = pathsToWork;
