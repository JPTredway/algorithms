/*
  You are given two arrays, one shorter (with all distinct elements) 
  and one longer. Find the shortest subarray in the longer array 
  that contains all the elements in the shorter array. The items can 
  appear in any order.
*/

const shortestSupersequence = (long, short) => {
  if (
    !long ||
    !short ||
    !long.length ||
    !short.length ||
    long.length < short.length
  )
    return [0, 0];
  short = new Set(short);
  const seen = {};
  let shortest = [0, Infinity],
    start = 0,
    end = 0;

  while (end <= long.length) {
    if (Object.keys(seen).length === short.size) {
      if (end - start < shortest[1] - shortest[0]) shortest = [start, end - 1];
      if (seen[long[start]]) {
        seen[long[start]]--;
        if (seen[long[start]] <= 0) delete seen[long[start]];
      }
      start++;
    } else {
      if (short.has(long[end])) seen[long[end]] = seen[long[end]] + 1 || 1;
      end++;
    }
  }

  return shortest;
};

module.exports = { shortestSupersequence };
