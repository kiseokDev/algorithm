# 두 노드 간 값의 차이가 가장 작은 노드의 값의 차이를 출력하라
# Input: root = [4,2,6,1,3,null,null]
# Output: 1

# Input: root = [10,4,15,1,8,null,null]
# Output: 2

# 풀이 1. 재귀 구조로 중위 순회

import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')
from tree_module import TreeNode, listToTreeNode


class Solution:
	prev = -sys.maxsize
	result = sys.maxsize

	# 풀이 1. 재귀 구조 중위 순회 비교 결과
	def minDiffInBST(self, root: TreeNode) -> int:
		if root.left:
			self.minDiffInBST(root.left)

		self.result = min(self.result, root.val - self.prev)
		self.prev = root.val

		if root.right:
			self.minDiffInBST(root.right)

		return self.result
	
	# 풀이 2. 반복 구조로 중위 순회
	def minDiffInBSTwithIteration(self, root: TreeNode) -> int:
		prev = -sys.maxsize
		result = sys.maxsize

		stack = []
		node = root

		# 반복 구조 중위 순회 비교 결과
		while stack or node:
			while node:
				stack.append(node)
				node = node.left

			node = stack.pop()
			# 현재 노드 값과 prev의 차이를 계산하여 최소 차이를 찾음
			result = min(result, node.val - prev)
			# 업데이트: 현재 노드 값으로 설정
			prev = node.val

			node = node.right

		return result
	

# 사용 예시
input = [8,4,12,2,6,None,None,1,3,5,7]
result = Solution().minDiffInBST(listToTreeNode(input))
print(result)

result = Solution().minDiffInBSTwithIteration(listToTreeNode(input))
print(result)