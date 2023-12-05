# 0을 완료하기 위해서는 1을 끝애야 한다는 것을 [0,1] 쌍으로 표현하는 n 개의 코스가 있다.
# 코스 개수 n과 이 쌍들을 입력받았을 때 모든 코스가 완료 가능한지 판별하라.
# Input: 2, [[1,0]]
# Output: true
# 설명 : 2개의 코스가 있으며, 1을 완료하기 위해서는 0을 끝내면 된다. 따라서 가능가능


# Input: 2, [[1,0],[0,1]]
# Output: false
# 설명 : 2개의 코스가 있으며, 1을 완료하기 위해서는 0을 끝내야 하고, 0을 완료하기 위해서는 1을 끝내야 한다. 따라서 불가능

# DFS로 순환 구조 판별

import collections
from typing import List


def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    graph = collections.defaultdict(list)
    # 그래프 구성
    for x, y in prerequisites:
        graph[x].append(y)

    # 중복되는 간선이 있는지 판별하기 위한 플래그
    visited = set()

    def dfs(i):
        # 순환 구조이면 False
        if i in visited:
            return False

        visited.add(i)
        for y in graph[i]:
            if not dfs(y):
                return False
        # 탐색 종료 후 순환 노드 삭제
        visited.remove(i)
        return True

    # 순환 구조 판별
    for x in list(graph):
        if not dfs(x):
            return False

    return True


print(canFinish(2, [[1, 0]]))


# 가지치기를 이용한 최적화


def canFinish2(numCourse: int, prerequisites: List[List[int]]) -> bool:
    graph = collections.defaultdict(list)
    # 그래프 구성
    for x, y in prerequisites:
        graph[x].append(y)

    # 중복되는 간선이 있는지 판별하기 위한 플래그
    visited = set()
    traced = set()

    def dfs(i):
        # 순환 구조이면 False
        if i in traced:
            return False

        # 이미 방문했던 노드이면 True
        if i in visited:
            return True

        traced.add(i)
        for y in graph[i]:
            if not dfs(y):
                return False
        # 탐색 종료 후 순환 노드 삭제
        traced.remove(i)
        # 탐색 종료 후 방문 노드 추가
        visited.add(i)
        return True

    # 순환 구조 판별
    for x in list(graph):
        if not dfs(x):
            return False

    return True


print(canFinish2(2, [[1, 0]]))
print(canFinish2(2, [[1, 0], [0, 1]]))
