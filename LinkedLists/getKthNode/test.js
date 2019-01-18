const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const getKthNode = require("./index");

describe("Get the Kth node from the end from a singly-linked list", function() {
  it("should get the Kth node", function() {
    const List1 = new LinkedList(1);
    List1.addToTail(2);
    List1.addToTail(3);
    List1.addToTail(4);
    expect(getKthNode(List1.head, 3).val).to.equal(1);
    expect(getKthNode(List1.head, 2).val).to.equal(2);
    expect(getKthNode(List1.head, 1).val).to.equal(3);
    expect(getKthNode(List1.head, 0).val).to.equal(4);
  });

  it("should return the head if the Kth node doesn't exist", function() {
    const List1 = new LinkedList(1);
    List1.addToTail(2);
    List1.addToTail(3);
    List1.addToTail(4);
    expect(getKthNode(List1.head, 5).val).to.equal(1);
    expect(getKthNode(List1.head, 15).val).to.equal(1);
    expect(getKthNode(List1.head, 150).val).to.equal(1);
  });
});
