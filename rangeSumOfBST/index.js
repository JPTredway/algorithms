// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Note:

// 1. The number of nodes in the tree is at most 10000.
// 2. The final answer is guaranteed to be less than 2^31.

// Definition for a binary tree node.
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

//
// @param {TreeNode} root
// @param {number} L
// @param {number} R
// @return {number}
//

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insertNode(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insertNode(val);
      } else {
        this.left = new Tree(val);
      }
    } else {
      if (this.right) {
        this.right.insertNode(val);
      } else {
        this.right = new Tree(val);
      }
    }
  }
}

// O(n) time complexity
// It cannot get any better as every node in the BST may
// be in range and therefore must be visited
const rangeSumBST = (curr, L, R, total = 0) => {
  if (curr.val >= L && curr.val <= R) {
    total += curr.val;
  }

  if (curr.left && curr.val >= L) {
    total += rangeSumBST(curr.left, L, R);
  }

  if (curr.right && curr.val <= R) {
    total += rangeSumBST(curr.right, L, R);
  }

  return total;
};

module.exports = {
  rangeSumBST,
  Tree
};
