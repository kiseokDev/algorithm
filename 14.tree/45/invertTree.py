# 이진 트리 반전

# 입력 : [4,2,7,1,3,6,9]
# 출력 : [4,7,2,9,6,3,1]

# 파이선 다운 방식
import collections
import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode, TreeNodeToList


def invertTree(root: TreeNode) -> TreeNode:
    if root:
        root.left, root.right = invertTree(root.right), invertTree(root.left)
        return root
    return None


def invertTreeBFS(root: TreeNode) -> TreeNode:
    queue = collections.deque([root])

    while queue:
        node = queue.popleft()
        # 부모 노드로부터 하향식 스왑
        if node:
            node.left, node.right = node.right, node.left
            queue.append(node.left)
            queue.append(node.right)
    return root


def invertTreeDFS(root: TreeNode) -> TreeNode:
    stack = collections.deque([root])

    while stack:
        node = stack.pop()
        # 부모 노드로부터 하향식 스왑
        if node:
            node.left, node.right = node.right, node.left
            stack.append(node.left)
            stack.append(node.right)
    return root


tree = invertTree(listToTreeNode([4, 2, 7, 1, 3, 6, 9]))

print(TreeNodeToList(tree))
