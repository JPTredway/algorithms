// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

const searchInsert = (nums, target) => {
  let count = 0;
  while (nums[count] < target && count < nums.length) count++;
  return count;
};

module.exports = searchInsert;
