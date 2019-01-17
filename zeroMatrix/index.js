// Write an algorithm such that if an element
// in an m x n matrix is 0, it's entire column is
// set to 0
const clearRow = (grid, row) => {
  for (let i = 0; i < grid[row].length; i++) {
    grid[row][i] = 0;
  }
};

const clearCol = (grid, col) => {
  for (let i = 0; i < grid.length; i++) {
    grid[i][col] = 0;
  }
};

const zeroMatrix = grid => {
  if (!grid) return grid;
  const rows = new Set();
  const cols = new Set();

  for (let row = 0; row < grid.length; row++) {
    if (!rows.has(row)) {
      for (let col = 0; col < grid[row].length; col++) {
        if (!cols.has(col) && grid[row][col] === 0) {
          rows.add(row);
          cols.add(col);
        }
      }
    }
  }

  rows.forEach(row => clearRow(grid, row));
  cols.forEach(col => clearCol(grid, col));

  return grid;
};

module.exports = zeroMatrix;
