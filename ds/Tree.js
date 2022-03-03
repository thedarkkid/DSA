class BinaryTreeNode {
  value;
  left;
  right;

  constructor (value) {
    this.value = value;
  }
}

class TreeNode {
  value;
  children;

  constructor (value) {
    this.value = value;
  }
}

module.exports = { TreeNode, BinaryTreeNode };