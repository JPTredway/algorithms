// Given an array of integers, write a method to find indices m and n
// such that if you sorted elements m through n, the entire array
// would be sorted. Minimize n - m (that is, find the smallest such
// sequence)

const subSort = arr => {
  if (!arr || arr.length < 2) return [0, 0];
  let left = 0,
    right = arr.length - 1;
  while (left < arr.length && arr[left] <= arr[left + 1]) left++;
  // prettier-ignore
  while (right > left && arr[right] >= arr[right - 1] && arr[right] >= arr[left]) right--;
  if (left === right) return [0, 0];

  const unsorted = arr.slice(left, right + 1);
  const min = Math.min(...unsorted),
    max = Math.max(...unsorted);
  let start = 0;
  while (start <= left) {
    if (min < arr[start]) break;
    start++;
  }
  let end = arr.length - 1;
  while (end >= right) {
    if (max > arr[end]) break;
    end--;
  }

  return [start, end];
};

module.exports = { subSort };
