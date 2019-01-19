// Write an algorithm to find the "next" node (i.e., in-order successor) of
// a given node in a binary search tree. You may assume that each node has a
// link to its parent.

const findMin = node => {
  while (node.left) {
    node = node.left;
  }
  return node;
};

const successor = node => {
  if (!node) return null;

  if (node.right) {
    return findMin(node.right);
  } else {
    let q = node;
    let x = node.parent;

    while (x && x.left !== q) {
      q = x;
      x = q.parent;
    }
    return x;
  }
};

module.exports = successor;
