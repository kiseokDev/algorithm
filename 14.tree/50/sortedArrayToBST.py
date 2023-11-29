from typing import List
import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode, TreeNodeToList


# 오름차순으로 정렬된 배열을 높이 균형 이진 탐색 트리로 변환하라.
# input : [-10,-3,0,5,9]
# output: [0,-3,9,-10,null,5]
def sortedArrayToBST(nums: List[int]) -> TreeNode:
    if not nums:
        return None
    mid = len(nums) // 2

    # 분할 정복으로 이진 검색 결과 트리 구성
    node = TreeNode(nums[mid])
    # nums[:mid] : mid 값을 기준으로 왼쪽에 있는 값들
    node.left = sortedArrayToBST(nums[:mid])
    # nums[mid+1:] : mid 값을 기준으로 왼쪽에 있는 값들
    node.right = sortedArrayToBST(nums[mid + 1 :])
    return node


# 사용 예시
BST = sortedArrayToBST([-10, -3, 0, 5, 9])
print(TreeNodeToList(BST))  # [0, -3, 9, -10, None, 5]


# list = [5, 9]
# mid = len(list) // 2
# print(list)
# print(list[:mid])


# print(9 // 2)

# nums[::] : nums의 모든 값들
# nums[::2] : nums의 모든 값들 중 2칸씩 건너뛴 값들
# nums[1::2] : nums의 모든 값들 중 2칸씩 건너뛴 값들 중 1번째 값부터 시작하는 값들
# nums[::-1] : nums의 모든 값들을 역순으로 출력
# nums[::-2] : nums의 모든 값들을 역순으로 출력하되 2칸씩 건너뛴 값들만 출력
# nums[1:5]
# 9//2 : // 연산자는 나눗셈 후 소수점 이하의 수를 버리고, 정수 부분의 수만 구한다.
