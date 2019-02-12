/*
  Given an array with letters and numbers, find the longest
  subarray with an equal number of letters and numbers.
*/

const longestSubArr = arr => {
  if (!arr) return [];
  let longest = [0, 0];
  const subs = [];
  for (let i = 0; i < arr.length; i++) {
    const weight = isNaN(arr[i]) ? 1 : -1;
    for (let j = 0; j < subs.length; j++) {
      subs[j] += weight;
      if (!subs[j] && subs.length - j > longest[1] - longest[0]) {
        longest = [j, subs.length];
      }
    }
    subs.push(weight);
  }
  return longest[1] ? arr.slice(longest[0], longest[1] + 1) : [];
};

module.exports = { longestSubArr };
