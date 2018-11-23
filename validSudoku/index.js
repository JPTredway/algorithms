// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

const isValidSudoku = board => {
  for (let ri = 0; ri < board.length; ri++) {
    const row = board[ri];
    const map = {};
    for (let ci = 0; ci < row.length; ci++) {
      const col = row[ci];

      // Check 3x3 square
      if (!(ri % 3) && !(ci % 3)) {
        const map = {};
        const square = [
          ...board[ri].slice(ci, ci + 3),
          ...board[ri + 1].slice(ci, ci + 3),
          ...board[ri + 2].slice(ci, ci + 3)
        ];
        for (let num of square) {
          if (parseInt(num) && map[num]) return false;
          map[num] = true;
        }
      }

      // Check every column, only on the first row
      if (!ri) {
        const map = {};
        for (let i = 0; i < board.length; i++) {
          const num = board[i][ci];
          if (parseInt(num) && map[num]) return false;
          map[num] = true;
        }
      }

      // Check every row
      if (parseInt(col) && map[col]) return false;
      map[col] = true;
    }
  }

  return true;
};

module.exports = isValidSudoku;
