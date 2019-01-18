// Remove duplicate nodes from an unsorted singly-linked list
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

module.exports = removeDuplicates;
