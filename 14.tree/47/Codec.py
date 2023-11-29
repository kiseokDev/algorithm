import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')
from tree_module import TreeNode, listToTreeNode, TreeNodeToList
import collections
class Codec:
	# 직렬화
	def serialize(self, root:TreeNode) -> str:
		# 이진트리 반전문제와 비슷하게 풀이
		queue = collections.deque([root])
		result = ['#']
		#  이진 트리의 각 노드를 너비 우선 탐색(BFS) 방식으로 순회.
		while queue:
			node = queue.popleft()
		#  각 노드의 값을 문자열 리스트에 추가. 
			if node:
				queue.append(node.left)
				queue.append(node.right)
				result.append(str(node.val))
			else:
		# 노드가 None일 경우, 대신에 '#'를 추가한다.
				result.append('#')
		#  결과적으로 얻은 문자열 리스트를 공백으로 연결하여 반환.
		return ' '.join(result)


	def deserialize(self, data: str) -> TreeNode:
		# 예외 처리(직렬화된 문자열이 '# #'인 경우는 빈 트리를 나타낸다. 여기서 첫 번째 '#'는 루트 노드가 None임을, 두 번째 '#'는 더 이상의 노드가 없음을 나타낸다)
		if data == '# #':
			return None
		# 2. 직렬화된 문자열을 공백으로 분리하여 노드 값 리스트를 생성
		nodes = data.split()
		root = TreeNode(int(nodes[1]))
		queue = collections.deque([root])
		index = 2
		# 리스트의 값을 사용하여 너비 우선 탐색 방식으로 이진 트리를 재구성
		while queue:
			node = queue.popleft()
			# '#'는 None 노드를 나타낸다.
			if nodes[index] is not '#':
				node.left = TreeNode(int(nodes[index]))
				queue.append(node.left)
			index += 1
			if nodes[index] is not '#':
				node.right = TreeNode(int(nodes[index]))
				queue.append(node.right)
			index += 1
			# 최종적으로 구성된 이진 트리의 루트 노드를 반환한다.
		return root
	

# 사용 예시
lst = [1,2,3,None,None,4,5]
root = listToTreeNode(lst)
codec = Codec()
print(codec.serialize(root))
print(TreeNodeToList(codec.deserialize(codec.serialize(root))))