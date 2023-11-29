# 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.


from collections import deque
import dis


def longestDistance(n, vertex):
    # 그래프 생성
    graph = [[] for _ in range(n + 1)]
    for v1, v2 in vertex:
        graph[v1].append(v2)
        graph[v2].append(v1)

    # 각 노드까지의 거리를 저장할 리스트
    distances = [0] * (n + 1)

    # BFS를 위한 큐 초기화 및 시작 노드 설정
    queue = deque([1])
    distances[1] = 1  # 시작 노드의 거리는 1로 설정

    # BFS 실행
    while queue:
        current_node = queue.popleft()

        for next_node in graph[current_node]:
            if distances[next_node] == 0:
                distances[next_node] = distances[current_node] + 1
                queue.append(next_node)

    # 가장 먼 거리와 같은 거리를 가진 노드의 수를 반환
    max_distance = max(distances)
    return distances.count(max_distance)


# 1 번 노드로 부터 가장 멀리 떨어진 노드의 개수를 구하는 문제이다.
# 1번 노드에서 부터 시작?
# 짧은 경로를 상태값으로 가지고 있어야한다.
# 2로 가는 방법은 1->2 가 있고 1->3->2 가 있는데 1->2가 더 짧은 경로이다.
# 그러므로 2의 상태값은 1->2 가 되고 경로길이 1을 리턴;


# print(longestDistance(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))


def test(n, vertex):
    distance = [-1] * (n + 1)
    graph = [[] for _ in range(n + 1)]
    for x1, x2 in vertex:
        graph[x1].append(x2)
        graph[x2].append(x1)

    queue = deque([1])
    distance[1] = 0
    while queue:
        current_node = queue.popleft()
        for next_node in graph[current_node]:
            if distance[next_node] == -1:
                distance[next_node] = distance[current_node] + 1
                queue.append(next_node)

    max_distance = max(distance)
    answer = distance.count(max_distance)

    return answer


print(test(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))
