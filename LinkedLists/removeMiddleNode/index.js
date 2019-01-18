// Implement an algorithm to delete a node in the middle
// (i.e. any node but the first and last node, not
// necessarily the exact middle) of a singly linked list
// given access to only that node

// EX: Given the node c of the linked list a->b->c->d->e->f->null
// you don't need to return anything, but the list should now be
// a->b->d->e->f->null

const removeMiddleNode = node => {
  if (!node) return node;
  [node.val, node.next.val] = [node.next.val, node.val];
  node.next = node.next.next;
};

module.exports = removeMiddleNode;
