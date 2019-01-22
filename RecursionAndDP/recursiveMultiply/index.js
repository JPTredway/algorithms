/*
  Write a recursive function to multiply two positive
  integers without using the * operator. You can use
  addition, subtraction, and bit shifting, but you 
  should minimize the number of those operations.
*/
const multiplyHelper = (x, y) => {
  if (x === 0) return 0;
  if (x === 1) return y;

  let s = x >> 1; // divide in half
  let side1 = multiplyHelper(s, y); // calculate half

  let side2 = side1;
  if (x % 2 === 1) {
    // if x is odd, we have to calculate the second half seperately
    side2 = multiplyHelper(x - s, y);
  }

  return side1 + side2;
};

const recursiveMultiply = (x, y) => {
  const [larger, smaller] = x >= y ? [x, y] : [y, x];
  return multiplyHelper(smaller, larger);
};

module.exports = { recursiveMultiply };
