// Rotate a 2D Array 90˚ in place (O(1) Space complexity)

const rotateMatrix = grid => {
  if (!grid) return grid;
  const n = grid.length - 1;

  for (let i = 0; i < grid.length / 2; i++) {
    for (let j = i; j < grid.length - 1 - i; j++) {
      let top = [i, j],
        right = [top[1], n - top[0]],
        btm = [right[1], n - right[0]],
        left = [btm[1], n - btm[0]];

      [
        grid[top[0]][top[1]],
        grid[right[0]][right[1]],
        grid[btm[0]][btm[1]],
        grid[left[0]][left[1]]
      ] = [
        grid[left[0]][left[1]],
        grid[top[0]][top[1]],
        grid[right[0]][right[1]],
        grid[btm[0]][btm[1]]
      ];
    }
  }
};

module.exports = rotateMatrix;
