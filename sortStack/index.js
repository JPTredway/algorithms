/*
  Write a program to sort a stack such that the smallest items are on
  the top. You can use an additional temporary stack, but you may not
  copy the elements into any other data structure (such as an array).
  The stack supports the following operations: push, pop, peek, and 
  isEmpty.
*/

const sortStack = stack => {
  if (!stack || !stack.length) return stack;
  const temp = [];
  while (stack.length) {
    const top = stack.pop();
    while (temp[temp.length - 1] > top) {
      stack.push(temp.pop());
    }
    temp.push(top);
  }

  while (temp.length) {
    stack.push(temp.pop());
  }

  return stack;
};

module.exports = { sortStack };
