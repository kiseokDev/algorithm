import { listToTreeNode } from '../tree_module';
function longestUnivaluePath(root) {
  let result = 0;

  function dfs(node) {
    if (node === null) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.left !== null && node.left.val === node.val) {
      left += 1;
    } else {
      left = 0;
    }

    if (node.right !== null && node.right.val === node.val) {
      right += 1;
    } else {
      right = 0;
    }

    result = Math.max(result, left + right);
    return Math.max(left, right);
  }
  dfs(root);
  return result;
}

let list = [5, 4, 5, 1, 1, 5];
let root = listToTreeNode(list); // You need to implement listToTreeNode function
console.log(longestUnivaluePath(root));
