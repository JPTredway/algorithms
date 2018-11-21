const zeroSum = nums => {
  const map = {};

  return nums.some(num => {
    if (map[num] !== undefined) return true;
    map[num * -1] = num;
  });
};

module.exports = zeroSum;
