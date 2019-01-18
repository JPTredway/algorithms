const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const removeMiddleNode = require("./index");

describe("Remove a 'middle' node from a singly linked list", function() {
  it("should remove a given 'middle' node", function() {
    let List1 = new LinkedList("a");
    let nodeToRemove = List1.addToTail("b");
    List1.addToTail("c");
    List1.addToTail("d");
    List1.addToTail("e");
    List1.addToTail("f");
    removeMiddleNode(nodeToRemove);

    let List2 = new LinkedList("a");
    List2.addToTail("c");
    List2.addToTail("d");
    List2.addToTail("e");
    List2.addToTail("f");
    expect(List1.head).to.deep.equal(List2.head);

    List1 = new LinkedList("a");
    List1.addToTail("b");
    nodeToRemove = List1.addToTail("c");
    List1.addToTail("d");
    List1.addToTail("e");
    List1.addToTail("f");
    removeMiddleNode(nodeToRemove);

    List2 = new LinkedList("a");
    List2.addToTail("b");
    List2.addToTail("d");
    List2.addToTail("e");
    List2.addToTail("f");
    expect(List1.head).to.deep.equal(List2.head);

    List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("c");
    nodeToRemove = List1.addToTail("d");
    List1.addToTail("e");
    List1.addToTail("f");
    removeMiddleNode(nodeToRemove);

    List2 = new LinkedList("a");
    List2.addToTail("b");
    List2.addToTail("c");
    List2.addToTail("e");
    List2.addToTail("f");
    expect(List1.head).to.deep.equal(List2.head);

    List1 = new LinkedList("a");
    List1.addToTail("b");
    List1.addToTail("c");
    List1.addToTail("d");
    nodeToRemove = List1.addToTail("e");
    List1.addToTail("f");
    removeMiddleNode(nodeToRemove);

    List2 = new LinkedList("a");
    List2.addToTail("b");
    List2.addToTail("c");
    List2.addToTail("d");
    List2.addToTail("f");
    expect(List1.head).to.deep.equal(List2.head);
  });
});
