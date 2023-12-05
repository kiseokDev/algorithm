import collections
from typing import List
import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode

# 이진 트리의 최대깊이를 구해라


def maxDepth(root):
    if not root:
        return 0
    queue = collections.deque([root])

    depth = 0

    while queue:
        depth += 1
        # 큐 연산 추출 노드의 자식 노드 삽입
        for _ in range(len(queue)):
            cur_root = queue.popleft()
            if cur_root.left:
                queue.append(cur_root.left)
            if cur_root.right:
                queue.append(cur_root.right)
    # BFS 반복 횟수 == 깊이
    return depth


# 사용 예시
lst = [3, 9, 20, None, None, 15, 7]
root = listToTreeNode(lst)
print(maxDepth(root))
