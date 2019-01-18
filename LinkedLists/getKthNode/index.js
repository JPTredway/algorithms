// Get the Kth node from the end from a singly-linked list
const countNodes = head => {
  let count = 0;
  let curr = head;
  while (curr) {
    count++;
    curr = curr.next;
  }
  return count;
};

const getKthNode = (head, k) => {
  if (!head) return head;
  const totalNodes = countNodes(head);
  let nodesToTraverse = totalNodes - k - 1;
  if (nodesToTraverse <= 0) return head;
  let curr = head;
  while (nodesToTraverse) {
    curr = curr.next;
    nodesToTraverse--;
  }
  return curr;
};

module.exports = getKthNode;
