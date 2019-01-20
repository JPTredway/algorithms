// You are given a binary tree in which each node contains an
// integer value (positive or negative). Design an algorithm
// to count the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf,
// but it must go downwards (traveling only from parent nodes to
// child nodes).

const numTreePaths = (node, sum, paths = []) => {
  if (!node) return 0;

  let count = 0;
  for (let i = 0; i < paths.length; i++) {
    paths[i] += node.val;
    if (paths[i] === sum) count++;
  }
  paths.push(node.val);
  if (node.val === sum) count++;
  count += numTreePaths(node.left, sum, paths);
  count += numTreePaths(node.right, sum, paths);

  paths.pop();
  for (let i = 0; i < paths.length; i++) {
    paths[i] -= node.val;
  }

  return count;
};

module.exports = numTreePaths;
