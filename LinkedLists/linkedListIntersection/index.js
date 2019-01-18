// Given the head nodes of 2 singly linked lists, determine if the nodes
// intersect (by reference, not by value). If they do not intersect,
// return false. If they do, return the node at which they intersect

const getTailAndLength = node => {
  let length = 0;
  while (node.next) {
    node = node.next;
  }
  return [node, length];
};

const linkedListIntersection = (head1, head2) => {
  if (!head1 || !head2) return false;
  const [tail1, len1] = getTailAndLength(head1);
  const [tail2, len2] = getTailAndLength(head2);
  if (tail1 !== tail2) return false;
  let [smaller, larger] = len1 < len2 ? [head1, head2] : [head2, head1];
  for (let i = 0; i < Math.abs(len1 - len2); i++) {
    larger = larger.next;
  }
  while (larger !== smaller) {
    larger = larger.next;
    smaller = smaller.next;
  }
  return smaller;
};

module.exports = linkedListIntersection;
