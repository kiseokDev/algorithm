import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')
from tree_module import TreeNode, listToTreeNode, TreeNodeToList



# 이진 탐색 트리(BST)가 주어졌을 때 L 이상 R 이하의 값을 지닌 노드의 합을 구하라.

# input : [10,5,15,3,7,null,18], L = 7, R = 15
# output: 32

# Brute Force
def rangeSumBSTwithBruteForce(root: TreeNode, L: int, R: int) -> int:
	if not root:
		return 0
	
	return (root.val if L <= root.val <= R else 0) + \
			rangeSumBSTwithBruteForce(root.left, L, R) + \
			rangeSumBSTwithBruteForce(root.right, L, R)

	
# DFS 가지치기로 필요한 노드 탐색
def rangeSumBSTwithDFS(root: TreeNode, L: int, R: int) -> int:
	# 이진 탐색 트리의 특징을 이용 (왼쪽의 값은 항상 작고, 오른쪽의 값은 항상 크다)
	def dfs(node : TreeNode): 
		if not node : 
			return 0 
		
		# 불필요한 탐색을 피하기 위해 가지치기
		if node.val < L :
			return dfs(node.right)
		if node.val > R :
			return dfs(node.left)
		
		# node.val이 L과 R 사이에 있을 때
		# 결국 L과 R 사이에 있는 node.val의 합을 구하는 것
		return node.val + dfs(node.left) + dfs(node.right) 
	
	return dfs(root)

# 반복 구조 DFS로 필요한 노드 탐색
def rangeSumBSTwithDFSIterative(root: TreeNode, L: int, R: int) -> int:
	stack, sum = [root], 0
	# 스택 이용 필요한 노드 DFS 반복
	while stack:
		node = stack.pop()
		if node:
			if node.val > L:
				stack.append(node.left)
			if node.val < R:
				stack.append(node.right)
			if L <= node.val <= R:
				sum += node.val
	return sum

# 반복 구조 BFS로 필요한 노드 탐색
def rangeSumBSTwithBFS(root: TreeNode, L: int, R: int) -> int:
	queue, sum = [root], 0
	# 큐 연산을 이용해 반복 구조 BFS로 필요한 노드 탐색
	while queue:
		node = queue.pop(0)
		if node:
			if node.val > L:
				queue.append(node.left)
			if node.val < R:
				queue.append(node.right)
			if L <= node.val <= R:
				sum += node.val
	return sum


print(rangeSumBSTwithDFSIterative(listToTreeNode([10,5,15,3,7,None,18]), 7, 15))
# print(rangeSumBSTwithBFS(listToTreeNode([10,5,15,3,7,None,18]), 7, 15))