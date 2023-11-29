# n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다.
# 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다.
# 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.


# 송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다.
# 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때,
# 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.
import sys


def solution(n, wires):
    answer = sys.maxsize
    tree = [[] for _ in range(n + 1)]
    for v1, v2 in wires:
        tree[v1].append(v2)
        tree[v2].append(v1)
    print(tree)

    # dfs를 통해 자식과 연결되어 있는 노드들의 수를 구한다
    def dfs(root, parent):
        count = 1
        for child in tree[root]:
            if child != parent:
                count += dfs(child, root)
        return count

    # 각 전선을 끊어서 얻은 두 서브트리의 크기 차이를 계산
    for v1, v2 in wires:
        # v1을 루트로 하는 서브트리의 노드 개수 계산
        count = dfs(v1, v2)
        # 두 서브트리의 크기 차이 계산
        diff = abs((n - count) - count)
        answer = min(answer, diff)

    return answer


# print(
#     solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
# )  # 3
# print(solution(4, [[1, 2], [2, 3], [3, 4]]))  # 0
# print(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))  # 1


def solution2(n, wires):
    answer = n  # 최대 차이는 전체 노드 수(최악의 경우)
    graph = [[] for _ in range(n + 1)]
    for v1, v2 in wires:
        graph[v1].append(v2)
        graph[v2].append(v1)

    def dfs(node, visited: set):
        visited.add(node)
        count = 1  # 현재 노드 포함
        for neighbor in graph[node]:
            if neighbor not in visited:
                count += dfs(neighbor, visited)
        return count

    for v1, v2 in wires:
        visited = set()
        visited.add(v2)  # v2 노드와 그 서브그래프를 방문하지 않도록 설정
        subtree_count = dfs(v1, visited)  # v1 노드에서 시작하는 서브그래프의 노드 수
        other_subtree_count = n - subtree_count  # 나머지 서브그래프의 노드 수
        diff = abs(subtree_count - other_subtree_count)  # 두 서브그래프의 노드 수 차이
        answer = min(answer, diff)  # 최소 차이 업데이트

    return answer


# 테스트
print(
    solution2(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]])
)  # 3
print(solution(4, [[1, 2], [2, 3], [3, 4]]))  # 0
print(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]))  # 1


def test(n, vertex):
    answer = n
    graph = [[] for _ in range(n + 1)]
    for v1, v2 in vertex:
        graph[v1].append(v2)
        graph[v2].append(v1)

    def dfs(node, visited: set):
        visited.add(node)
        count = 1
        for child in graph[node]:
            if child not in visited:
                count += dfs(child, visited)
        return count

    for v1, v2 in vertex:
        visited = set()
        visited.add(v2)
        count = dfs(v1, visited)
        diff = abs((n - count) - count)
        answer = min(answer, diff)
    return answer


print(test(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]))  # 3
