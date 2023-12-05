const listToTreeNode = (list, index = 0) => {
  if (index >= list.length || list[index] === null) {
    return null;
  }

  let node = new TreeNode(list[index]);
  node.left = listToTreeNode(list, 2 * index + 1);
  node.right = listToTreeNode(list, 2 * index + 2);
  return node;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function TreeNodeToList(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      if (node.left || node.right || queue.length) {
        queue.push(node.left);
        queue.push(node.right);
      }
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}
export { listToTreeNode, TreeNodeToList };
const test = {
  val: 3,
  left: {
    val: 4,
    left: { val: 5, left: null, right: null },
    right: { val: 8, left: null, right: null },
  },
  right: {
    val: 6,
    left: null,
    right: { val: 14, left: null, right: null },
  },
};
