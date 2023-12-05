# 노드 개수와 무방향 그래프를 입력받아 트리가 최소 높이가 되는 루트의 목록을 리턴하라.

# Input: n = 4, edges = [[1,0],[1,2],[1,3]]
# Output: [1]

# Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
# Output: [3,4]
import collections
import sys

sys.path.append("/home/prime/workspace/algorithm/14.tree")
from tree_module import TreeNode, listToTreeNode
from typing import List


def findMinHeightTrees(n: int, edges: List[List[int]]) -> List[int]:
    if n <= 1:
        return [0]

    # 양방향 그래프 구성
    graph = collections.defaultdict(list)
    for i, j in edges:
        graph[i].append(j)
        graph[j].append(i)

    # print(graph) #  {1: [0, 2, 3], 0: [1], 2: [1], 3: [1]})

    # 첫 번째 리프 노드 추가
    leaves = []
    for i in range(n + 1):
        if len(graph[i]) == 1:
            leaves.append(i)

    print(leaves)

    # 루트 노드만 남을 때까지 반복 제거
    while n > 2:
        n -= len(leaves)
        new_leaves = []
        # 리프 노드 제거
        for leaf in leaves:
            # 양방향 그래프이므로 양쪽에서 제거
            #  0: [1](제거)
            #  1: [0, 2, 3] => 1: [2, 3]

            neighbor = graph[leaf].pop()
            graph[neighbor].remove(leaf)

            if len(graph[neighbor]) == 1:
                new_leaves.append(neighbor)
        leaves = new_leaves
    return leaves


# 사용 예시
n = 4
edges = [[1, 0], [1, 2], [1, 3]]
print(findMinHeightTrees(n, edges))

n = 6
edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]
print(findMinHeightTrees(n, edges))


# import math

# n = 100
# minimum_questions = math.ceil(math.log2(n))
# print(minimum_questions)

# print(2 ^ 7)
