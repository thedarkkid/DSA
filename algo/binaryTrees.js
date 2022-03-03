const visitNode = (node) => {
  console.log(node);
};

const rInOrderTraversal = (node) => {
  if (node === null) return;
  rInOrderTraversal(node.left);
  visitNode(node);
  rInOrderTraversal(node.right);
};

const rPreOrderTraversal = (node) => {
  if (node === null) return;
  visitNode(node);
  rPreOrderTraversal(node.left);
  rPreOrderTraversal(node.right);
};

const rPostOrderTraversal = (node) => {
  if (node === null) return;
  rPostOrderTraversal(node.left);
  rPostOrderTraversal(node.right);
  visitNode(node);
};