// Remove duplicate nodes from an unsorted singly-linked list

// Recursive
const removeDuplicatesRecursive = (node, seen = new Set()) => {
  if (!node) return null;
  if (seen.has(node.val)) return removeDuplicatesRecursive(node.next, seen);
  seen.add(node.val);
  node.next = removeDuplicatesRecursive(node.next, seen);
  return node;
};

// Iterative
const removeDuplicates = head => {
  if (!head || !head.next) return head;
  const seen = new Set();
  seen.add(head.val);
  let prev = head,
    curr = head.next;
  while (curr) {
    if (seen.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seen.add(curr.val);
    }
    prev = curr;
    curr = curr.next;
  }
  return head;
};

module.exports = { removeDuplicates, removeDuplicatesRecursive };
