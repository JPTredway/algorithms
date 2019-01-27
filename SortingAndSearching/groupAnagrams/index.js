// Write a method to sort an array of strings so that all the anagrams
// are next to each other.

const sorted = str => {
  return [...str.toLowerCase()].sort().join("");
};

const customComparator = (a, b) => {
  return sorted(a) === sorted(b) ? 0 : 1;
};

const groupAnagrams = arr => {
  if (!arr) return arr;
  return arr.sort(customComparator);
};

module.exports = { groupAnagrams };
