const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const removeDuplicates = require("./index");

describe("Remove duplicates from a singly-linked list", function() {
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
    expect(List1.head).to.deep.equal(List2.head);
  });

  it("should modify the given Linked List", function() {
    const List1 = new LinkedList(1);
    List1.addToTail(1);
    expect(List1.head.next).to.deep.equal({ val: 1, next: null });
    removeDuplicates(List1.head);
    expect(List1.head.next).to.equal(null);
  });
});
