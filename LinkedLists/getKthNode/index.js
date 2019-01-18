// Get the Kth node from the end from a singly-linked list
const getKthNode = (head, k) => {
  if (!head) return head;
  let fast = head;
  while (k && fast.next) {
    fast = fast.next;
    k--;
  }
  let curr = head;
  while (fast.next) {
    curr = curr.next;
    fast = fast.next;
  }
  return curr;
};

module.exports = getKthNode;
