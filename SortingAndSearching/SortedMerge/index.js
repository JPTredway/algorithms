// You are given 2 sorted arrays, A and B, where A has a
// large enough buffer at the end to hold B. Write a method
// to merge B into A in sorted order.

const sortedMerge = (arr1, arr2) => {
  if (!arr1 || !arr1.length) return arr2;
  if (!arr2 || !arr2.length) return arr1;

  let currHigh = arr1.length - 1;
  let arr1Index = arr1.length - arr2.length - 1;
  let arr2Index = arr2.length - 1;

  while (arr2[0] !== null) {
    if (arr1[arr1Index] > arr2[arr2Index]) {
      arr1[currHigh] = arr1[arr1Index];
      arr1[arr1Index] = null;
      arr1Index--;
    } else {
      arr1[currHigh] = arr2[arr2Index];
      arr2[arr2Index] = null;
      arr2Index--;
    }
    currHigh--;
  }

  return arr1;
};

module.exports = { sortedMerge };
