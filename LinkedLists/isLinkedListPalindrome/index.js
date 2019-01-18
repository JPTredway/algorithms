// Implement a function to check if a linked list is a palindrome
const isArrPalindrome = arr => {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) return false;
    start++;
    end--;
  }
  return true;
};

const isLLPaindrome = node => {
  if (!node) return false;
  const values = [];
  while (node) {
    values.push(node.val);
    node = node.next;
  }

  return isArrPalindrome(values);
};

module.exports = isLLPaindrome;
