# 전위, 중위 순회 결과로 이진 트리 구축

# 전위 순회 결과로 중위 순회 결과로 중위 순회 분할 정복

import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode, TreeNodeToList


def buildTree(preorder, inorder):
    # 전위 순회의 첫번째 결과는 정확히 중위 순회 결과를 왼쪽과 오른쪽으로 분할 시킴
    if inorder:
        # 1. 전위 순회 첫번째 결과 pop
        index = inorder.index(preorder.pop(0))

        # 중위 순회 분할 정복
        node = TreeNode(inorder[index])  # 2. 중위 순회의 기준이 될 노드 생성
        node.left = buildTree(preorder, inorder[0:index])  # 슬라이싱
        node.right = buildTree(preorder, inorder[index + 1 :])  #
        return node


# tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
tree = buildTree([1, 2, 4, 5, 3, 6, 7, 9, 8], [4, 2, 5, 1, 7, 9, 6, 8, 3])
print(TreeNodeToList(tree))


def test(lst):
    if lst:
        print(lst)
        return lst
