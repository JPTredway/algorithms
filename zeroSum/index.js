// Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero and false if not.
// Time complexity: O(n)
const zeroSum = nums => {
  const map = {};

  return nums.some(num => {
    if (map[num] !== undefined) return true;
    map[num * -1] = num;
  });
};

module.exports = zeroSum;
