# 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
# 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
# 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때
# A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
# 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

# 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때,
# 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.


def solution(n, computers):
    # 네트워크의 수를 0으로 초기화
    answer = 0

    # 그래프를 위한 빈 인접 리스트 초기화
    graph = [[] for _ in range(n)]

    # 입력 행렬에 따라 인접 리스트 채우기
    for i in range(n):
        for j in range(n):
            # 컴퓨터 i와 j 사이에 연결이 있고, i가 j가 아닌 경우
            if computers[i][j] == 1 and i != j:
                # i에 연결된 노드 목록에 j 추가
                graph[i].append(j)

    # 깊이 우선 탐색 (DFS) 함수 정의
    def dfs(node, visited):
        # 현재 노드를 방문한 것으로 표시
        visited.add(node)
        # 현재 노드에 연결된 각 노드에 대해
        for neighbor in graph[node]:
            # 아직 방문하지 않은 노드인 경우
            if neighbor not in visited:
                # 그 노드에서 재귀적으로 DFS 수행
                dfs(neighbor, visited)

    # 방문한 노드를 추적하기 위한 빈 집합 초기화
    visited = set()

    # 그래프의 각 노드에 대해
    for i in range(n):
        # 아직 방문하지 않은 노드인 경우
        if i not in visited:
            # 그 노드에서 DFS 수행
            dfs(i, visited)
            # 네트워크 수 증가
            answer += 1

    # 네트워크 수 반환
    return answer


# print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))  # 2
# print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))  # 1


def test(n, computer):
    answer = 0
    graph = [[] for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if computer[i][j] == 1 and i != j:
                graph[i].append(j)

    def dfs(node, visited: set):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor, visited)

    visited = set()

    for i in range(n):
        print(visited)
        if i not in visited:
            dfs(i, visited)
            answer += 1

    return answer


print(test(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))  # 2
print(test(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]))  # 1
