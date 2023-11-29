# 이진 트리에서 두 노드간 가장 긴 경로의 길이를 출력하라.
# height를 구하는 문제이다

# input : [1,2,3,4,5]
# output: 3
import sys
sys.path.append('/home/prime/workspace/algorithm/14.tree')
from tree_module import TreeNode, listToTreeNode

# 리프 노드까지 탐색한 다음 부모로 거슬러 올라가면서 각각의 거리를 계산해 상태값을 
# 엡데이트하면서 트리를 탐색한다.

def diameterOfBinaryTree(root: TreeNode) -> int:
    longest = 0

    def dfs(node: TreeNode) -> int: 
        nonlocal longest
        if not node: 
            return -1 

        right = dfs(node.right)
        left = dfs(node.left)
        longest = max(longest, right + left + 2)
        return max(left, right) + 1
    
    dfs(root)
    return longest

	
# 사용 예시
lst = [1,2,3,4,5]
root = listToTreeNode(lst)

print(diameterOfBinaryTree(root))
