// You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?

// Explanation:
// An input of [3,0,3] can be visualized as such:

//  __    __
// |  |//|  |
// |  |//|  |
// |  |//|  |
// ‾‾‾‾‾‾‾‾‾‾
// The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

// Challenge: do this in O(n) with < 2 pass-throughs

// O(n)
// Completed in a single iteration
const trimMargin = arr => {
  let a = 0,
    b = arr.length - 1;
  while (a < b && arr[a] < arr[a + 1]) a++;
  while (b > a && arr[b] < arr[b - 1]) b--;
  return [a, b];
};

const volume = (heights, total = 0) => {
  if (heights.length < 3) return total;
  let [a, b] = trimMargin(heights);

  while (a < b) {
    let test;
    if (heights[a] <= heights[b]) {
      test = heights[a];
      while (a < b && test >= heights[a + 1]) {
        total += test - heights[a + 1];
        a++;
      }
      a++;
    } else {
      test = heights[b];
      while (a < b && test >= heights[b - 1]) {
        total += test - heights[b - 1];
        b--;
      }
      b--;
    }
  }

  return total;
};

module.exports = volume;
