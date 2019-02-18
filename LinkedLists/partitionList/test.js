const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const { partitionList } = require("./index");

describe("Partion a Linked List around a given value", function() {
  it("should partion a list", function() {
    const List1 = new LinkedList(3);
    List1.addToTail(5);
    List1.addToTail(8);
    List1.addToTail(5);
    List1.addToTail(10);
    List1.addToTail(2);
    List1.addToTail(1);
    partitionList(List1.head, 5);

    expect(List1.head.val).to.equal(3);
    expect(List1.head.next.val).to.equal(2);
    expect(List1.head.next.next.val).to.equal(1);
    expect(List1.head.next.next.next.val).to.equal(5);
    expect(List1.head.next.next.next.next.val).to.equal(10);
    expect(List1.head.next.next.next.next.next.val).to.equal(5);
    expect(List1.head.next.next.next.next.next.next.val).to.equal(8);
  });

  it("should work when all list values are the same", function() {
    const List1 = new LinkedList(1);
    List1.addToTail(1);
    List1.addToTail(1);

    partitionList(List1.head, 1);
    expect(List1.head.val).to.equal(1);
    expect(List1.head.next.val).to.equal(1);
    expect(List1.head.next.next.val).to.equal(1);

    partitionList(List1.head, -1);
    expect(List1.head.val).to.equal(1);
    expect(List1.head.next.val).to.equal(1);
    expect(List1.head.next.next.val).to.equal(1);

    partitionList(List1.head, 10);
    expect(List1.head.val).to.equal(1);
    expect(List1.head.next.val).to.equal(1);
    expect(List1.head.next.next.val).to.equal(1);
  });
});
