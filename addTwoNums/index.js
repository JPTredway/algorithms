/*
  Write a function that adds two numbers. You should not use + or any
  arithmetic operators.
*/

const addTwoNums = (a, b) => {
  const add = a ^ b;
  const carry = (a & b) << 1;

  return carry ? addTwoNums(add, carry) : add | carry;
};

module.exports = { addTwoNums };
