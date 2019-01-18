const expect = require("chai").expect;
const LinkedList = require("../LinkedList");
const linkedListIntersection = require("./index");

describe("Check if two Linked Lists intersect", function() {
  it("should return false if the linked lists don't intersect", function() {
    let List1 = new LinkedList("1");
    List1.addToTail("2");
    List1.addToTail("3");
    List1.addToTail("4");

    let List2 = new LinkedList("1");
    List2.addToTail("2");
    List2.addToTail("3");
    List2.addToTail("4");

    expect(linkedListIntersection(List1.head, List2.head)).to.equal(false);
  });

  it("should return the intersecting node if the linked lists intersect", function() {
    let List1 = new LinkedList("1");
    List1.addToTail("2");
    const intersection = List1.addToTail("3");
    List1.addToTail("4");

    let List2 = new LinkedList("1");
    let nodeToUpdate = List2.addToTail("2");
    nodeToUpdate.next = intersection;

    expect(linkedListIntersection(List1.head, List2.head)).to.deep.equal(
      intersection
    );
  });

  it("should handle lists of different lengths", function() {
    let List1 = new LinkedList("1");
    List1.addToTail("2");
    const intersection = List1.addToTail("3");
    List1.addToTail("4");

    let List2 = new LinkedList("1");
    let nodeToUpdate = List2.addToTail("2");
    List2.addToTail("3");
    List2.addToTail("3");
    nodeToUpdate.next = intersection;

    expect(linkedListIntersection(List1.head, List2.head)).to.deep.equal(
      intersection
    );

    expect(linkedListIntersection(List2.head, List1.head)).to.deep.equal(
      intersection
    );
  });
});
