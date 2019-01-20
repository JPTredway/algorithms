const expect = require("chai").expect;
const BTNode = require("../BinaryTree");
const numTreePaths = require("./index");

describe(`Find all paths within a Binary Tree that add to a target sum`, function() {
  it("should find all unique paths", function() {
    const root = new BTNode(7);
    root.left = new BTNode(10);
    root.left.left = new BTNode(8);
    root.left.right = new BTNode(5);
    root.left.right.left = new BTNode(2);
    root.left.right.left.left = new BTNode(-1);
    root.left.right.left.left.right = new BTNode(0);
    root.left.right.left.left.left = new BTNode(10);
    root.left.right.right = new BTNode(1);

    root.right = new BTNode(20);
    root.right.left = new BTNode(-4);
    root.right.right = new BTNode(7);

    expect(numTreePaths(root, 16)).to.equal(5);
    expect(numTreePaths(root, 20)).to.equal(1);
    expect(numTreePaths(root, 11)).to.equal(1);
    expect(numTreePaths(root, 1)).to.equal(3);
    expect(numTreePaths(root, 42)).to.equal(0);
    expect(numTreePaths(root, -1)).to.equal(2);
  });
});
