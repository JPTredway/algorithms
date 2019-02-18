const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const { removeDuplicates, removeDuplicatesRecursive } = require("./index");

describe("Remove duplicates from a singly-linked list", function() {
  describe("Iterative Approach", function() {
    it("should remove duplicates", function() {
      const List1 = new LinkedList(1);
      List1.addToTail(2);
      List1.addToTail(0);
      List1.addToTail(1);
      List1.addToTail(5);
      removeDuplicates(List1.head);

      const List2 = new LinkedList(1);
      List2.addToTail(2);
      List2.addToTail(0);
      List2.addToTail(5);
      removeDuplicates(List2.head);
      expect(List1.head).to.deep.equal(List2.head);

      const List3 = new LinkedList(2);
      List1.addToTail(2);
      List1.addToTail(2);
      List1.addToTail(2);
      List1.addToTail(2);
      removeDuplicates(List3.head);
      expect(List3.head).to.deep.equal({ val: 2, next: null });
    });

    it("should modify the given Linked List", function() {
      const List1 = new LinkedList(1);
      List1.addToTail(1);
      expect(List1.head.next).to.deep.equal({ val: 1, next: null });
      removeDuplicates(List1.head);
      expect(List1.head.next).to.equal(null);
    });
  });

  describe("Recursive Approach", function() {
    it("should remove duplicates", function() {
      const List1 = new LinkedList(1);
      List1.addToTail(2);
      List1.addToTail(0);
      List1.addToTail(1);
      List1.addToTail(5);
      removeDuplicatesRecursive(List1.head);

      const List2 = new LinkedList(1);
      List2.addToTail(2);
      List2.addToTail(0);
      List2.addToTail(5);
      removeDuplicatesRecursive(List2.head);
      expect(List1.head).to.deep.equal(List2.head);

      const List3 = new LinkedList(2);
      List1.addToTail(2);
      List1.addToTail(2);
      List1.addToTail(2);
      List1.addToTail(2);
      removeDuplicatesRecursive(List3.head);
      expect(List3.head).to.deep.equal({ val: 2, next: null });
    });

    it("should modify the given Linked List", function() {
      const List1 = new LinkedList(1);
      List1.addToTail(1);
      expect(List1.head.next).to.deep.equal({ val: 1, next: null });
      removeDuplicatesRecursive(List1.head);
      expect(List1.head.next).to.equal(null);
    });
  });
});
