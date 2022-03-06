const { Queue } = require('../ds/Queue');

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

const bfs = (startNode, value) => {
  const isVisited = new Map();
  const queue = new Queue();
  queue.add(startNode);

  while (!queue.isEmpty()) {
    const current = queue.remove();
    if (isVisited.has(current.value)) continue;
    if (current.value === value) return current;
    queue.addMany(current.children);
    isVisited.set(current, true);
  }

  return false;
};

const dfs = (currentNode, value, isVisited = new Map()) => {
  if (isVisited.has(currentNode)) return false;
  if (currentNode.value === value) return true;
  isVisited.set(currentNode.value, true);

  for (const childNode of currentNode.children) if (dfs(childNode, value, isVisited)) return childNode;

  return false;
};