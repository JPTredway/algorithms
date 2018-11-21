// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Time complexity: O(n)
function sumArray(arr) {
  let currLargest = -Infinity;
  let currSum = 0;

  arr.forEach(num => {
    currSum += num;
    currLargest = Math.max(currSum, currLargest);
    currSum = Math.max(currSum, 0);
  });

  return currLargest;
}

module.exports = sumArray;
