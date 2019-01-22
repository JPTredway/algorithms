/*
A magic index in an array A[0...n-1] is defined such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a
magic index, if one exists, in array A.
*/

const magicIndex = (arr, start = 0, end = arr.length - 1) => {
  if (!arr || start > end) return -1;
  const midpoint = Math.floor((start + end) / 2);

  if (arr[midpoint] === midpoint) return midpoint;

  return arr[midpoint] < midpoint
    ? magicIndex(arr, midpoint + 1, end)
    : magicIndex(arr, start, midpoint - 1);
};

module.exports = { magicIndex };
