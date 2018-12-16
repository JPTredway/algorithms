const expect = require("chai").expect;
const { rangeSumBST, Tree } = require("./index");

describe("Range Sum of BST", function() {
  let root;

  it("should return a number", function() {
    root = new Tree(10);
    expect(rangeSumBST(root, 5, 20)).to.be.a("number");
  });

  it("should add all values when all nodes are in range", function() {
    root = new Tree(10);
    root.insertNode(11);
    root.insertNode(7);
    root.insertNode(9);
    root.insertNode(19);
    expect(rangeSumBST(root, 5, 20)).to.equal(56);
  });

  it("should exclude all values when no nodes are in range", function() {
    root = new Tree(10);
    root.insertNode(25);
    root.insertNode(1);
    root.insertNode(48);
    root.insertNode(100);
    root.insertNode(-100);
    expect(rangeSumBST(root, 11, 12)).to.equal(0);
  });

  it("should exclude all values when no nodes are in range", function() {
    root = new Tree(10);
    root.insertNode(25);
    root.insertNode(1);
    root.insertNode(48);
    root.insertNode(100);
    root.insertNode(-100);
    expect(rangeSumBST(root, 11, 12)).to.equal(0);
  });

  it("should only add values in range and only exclude those not in range", function() {
    root = new Tree(10);
    root.insertNode(25);
    root.insertNode(1);
    root.insertNode(48);
    root.insertNode(100);
    root.insertNode(-100);
    expect(rangeSumBST(root, 25, 50)).to.equal(73);
  });

  it("should handle L and R inclusively", function() {
    root = new Tree(10);
    root.insertNode(11);
    root.insertNode(9);
    expect(rangeSumBST(root, 9, 11)).to.equal(30);
  });
});
