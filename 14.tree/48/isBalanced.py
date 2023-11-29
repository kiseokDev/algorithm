# 이진 트리가 높이 균형(Height-Balanced)인지 판단하라
# 높이 균형 트리 : 모든 노드의 서브 트리 간의 높이 차이가 1 이하인 트리

# 입력 : [3,9,20,null,null,15,7]
# 출력 : true

# 입력 : [1,2,2,3,3,null,null,4,4]
# 출력 : false

# 풀이 1. 재귀 구조로 높이 차이 계산

import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode


def isBalanced(root: TreeNode):
    def check(root):
        # 트리가 비었으면 높이는 0
        if not root:
            return 0

        # 왼쪽과 오른쪽 서브트리의 높이를 재귀적으로 계산
        left = check(root.left)
        right = check(root.right)

        # 왼쪽이나 오른쪽 서브트리가 균형이 깨졌거나, 높이 차이가 1보다 크면 -1 반환
        if left == -1 or right == -1 or abs(left - right) > 1:
            return -1

        # 현재 노드의 높이 반환 (왼쪽과 오른쪽 서브트리 중 더 높은 높이에 1을 더함)
        return max(left, right) + 1

    # 전체 트리가 균형잡힌 경우에만 True 반환
    return check(root) != -1


# 테스트 케이스
print(isBalanced(listToTreeNode([3, 9, 20, None, None, 15, 7])))  # True
print(isBalanced(listToTreeNode([1, 2, 2, 3, 3, None, None, 4, 4])))  # False
