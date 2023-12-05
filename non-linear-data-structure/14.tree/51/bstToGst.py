# BST의 각 노드를 현재값보다 더 큰 값을 가진 모든 노드의 합으로 만들어라


# 중위 순회(역순)로 노드 값 누적


# input : [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
# output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode, TreeNodeToList
from typing import List


class Solution:
    val: int = 0

    def bstToGst(self, root: TreeNode) -> TreeNode:
        # 중위 순회 노드 값 누적
        if root:
            self.bstToGst(root.right)
            self.val += root.val
            root.val = self.val
            self.bstToGst(root.left)
        return root


# 사용 예시
result = Solution().bstToGst(
    listToTreeNode([4, 1, 6, 0, 2, 5, 7, None, None, None, 3, None, None, None, 8])
)
print(TreeNodeToList(result))


def solution(root: TreeNode) -> TreeNode:
    val = 0

    def bstToGst(root: TreeNode) -> TreeNode:
        nonlocal val
        # 중위 순회 노드 값 누적
        if root:
            bstToGst(root.right)
            val += root.val
            root.val = val
            bstToGst(root.left)
        return root

    return bstToGst(root)


root = listToTreeNode([4, 1, 6, 0, 2, 5, 7, None, None, None, 3, None, None, None, 8])
print(TreeNodeToList(solution(root)))
