function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkedList {
  constructor(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
  }

  addToTail(val) {
    const node = new ListNode(val);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    return node;
  }

  removeHead() {
    if (!this.head) return;

    if (this.head !== this.tail) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }
}

module.exports = LinkedList;
