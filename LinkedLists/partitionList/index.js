/*
  Write code to partition a list around a value x, sucht that all 
  nodes less than x come before all nodes greater than or equal to
  x. If x is contained within the list, the values of x only need to
  be after the elements less than x. The partition element x can 
  appear anywhere in the "right partition"; it does not need to 
  appear between the left and right partitons.

  Ex:
    I: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1
    O: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

const partitionList = (head, val) => {
  if (!head) return null;
  let a = head,
    b = head.next;
  while (a && b) {
    while (a && a.val < val) a = a.next;
    while (b && b.val >= val) b = b.next;
    if (a && b) {
      [a.val, b.val] = [b.val, a.val];
    }
  }
  return head;
};

module.exports = { partitionList };
