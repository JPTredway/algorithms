// Remove duplicate nodes from an unsorted singly-linked list
class LinkedList {
  constructor(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }

  addToTail(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }
}

const ListNode = function(val) {
  this.val = val;
  this.next = null;
};

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

module.exports = { removeDuplicates, LinkedList };
