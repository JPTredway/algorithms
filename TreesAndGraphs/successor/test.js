const expect = require("chai").expect;
const BSTNode = require("../BST");
const successor = require("./index");

describe(`Find "next" node of a BST`, function() {
  it("should find the next number", function() {
    const root = new BSTNode(7);
    root.left = new BSTNode(3);
    root.right = new BSTNode(10);

    root.left.parent = root;
    root.right.parent = root;
    expect(successor(root.left).val).to.equal(7);
    expect(successor(root).val).to.equal(10);
  });

  it(`should return null when there is no "next" node`, function() {
    const root = new BSTNode(7);
    root.left = new BSTNode(3);
    root.right = new BSTNode(10);

    root.left.parent = root;
    root.right.parent = root;
    expect(successor(root.right)).to.equal(null);
  });
});
