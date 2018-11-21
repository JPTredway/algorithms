// Given an array of negative/positive integers, return true if there exists three numbers whose sum is zero and false if not.
// Time complexity: O(nlogn + n2) = O(n2)
// // Requires sorting, but better than cubic (3 nested loops)
const zeroSum3 = nums => {
  if (nums.length < 3) return false;

  nums = nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i];
    let [start, end] = [i + 1, nums.length - 1];

    while (start < end) {
      let b = nums[start];
      let c = nums[end];

      if (a + b + c === 0) {
        return true;
      } else if (a + b + c > 0) {
        end--;
      } else {
        start++;
      }
    }
  }

  return false;
};

module.exports = zeroSum3;
