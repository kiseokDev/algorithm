from collections import deque


def solution(maps):
    n, m = len(maps), len(maps[0])
    visited = [[False for _ in range(m)] for _ in range(n)]
    queue = deque([(0, 0, 1)])  # 시작 위치와 거리 초기화
    visited[0][0] = True  # 시작 지점을 방문한 것으로 표시
    # 상하좌우 이동을 위한 방향 벡터
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    while queue:
        x, y, dist = queue.popleft()
        # 목적지에 도달했으면 거리 반환
        if x == n - 1 and y == m - 1:
            return dist
        # 모든 방향으로 이동 시도
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            # 맵 범위 내이고 벽이 아니며 방문하지 않았다면
            if (
                0 <= nx < n
                and 0 <= ny < m
                and maps[nx][ny] == 1
                and not visited[nx][ny]
            ):
                visited[nx][ny] = True
                queue.append((nx, ny, dist + 1))

    # 목적지에 도달할 수 없는 경우
    return -1


maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]  # 예상 결과: 11
# maps = [
#     [1, 0, 1, 1, 1],
#     [1, 0, 1, 0, 1],
#     [1, 0, 1, 1, 1],
#     [1, 1, 1, 0, 0],
#     [0, 0, 0, 0, 1],
# ]  # -1
# print(shortestDistance(maps))
# print(solution(maps))


def test(maps):
    n, m = len(maps), len(maps[0])
    queue = deque([(0, 0, 1)])
    visited = [[False for _ in range(m)] for _ in range(n)]
    visited[0][0] = True
    direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]
    while queue:
        x, y, dist = queue.popleft()
        visited[x][y] = True
        if x == n - 1 and y == m - 1:
            return dist
        for dx, dy in direction:
            nx, ny = dx + x, dy + y
            if (
                0 <= nx < n
                and 0 <= ny < m
                and maps[nx][ny] == 1
                and visited[nx][ny] == False
            ):
                visited[nx][ny] = True
                queue.append((nx, ny, dist + 1))

    return -1


print(test(maps))
