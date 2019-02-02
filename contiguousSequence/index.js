/*
  You are given an array of integers (both positive and negative). 
  Find the contiguous sequence with the largest sum. Return the sum.
*/

const contiguousSequence = nums => {
  if (!nums || !nums.length) return 0;

  let largest = nums[0],
    curr = 0;
  for (let num of nums) {
    curr += num;
    largest = Math.max(largest, curr);
    curr = Math.max(0, curr);
  }
  return largest;
};

module.exports = { contiguousSequence };
