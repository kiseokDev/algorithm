def solution(n, results):
    # 승패 관계를 나타내는 2차원 배열 초기화
    wins = [[0] * n for _ in range(n)]

    # 주어진 경기 결과를 바탕으로 승패 관계 설정
    for win, lose in results:
        wins[win - 1][lose - 1] = 1

    # 플로이드-워셜 알고리즘을 사용하여 간접적인 승패 관계 파악
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if wins[i][k] and wins[k][j]:
                    wins[i][j] = 1

    # 순위를 정확하게 매길 수 있는 선수의 수 계산
    answer = 0
    for i in range(n):
        count = 0
        for j in range(n):
            # 선수 i가 선수 j를 이기거나, 선수 j가 선수 i를 이긴 경우 count 증가
            if wins[i][j] or wins[j][i]:
                count += 1
        # 모든 선수와의 승패 관계가 확립된 경우
        if count == n - 1:
            answer += 1

    return answer


# 예시 입력
n = 5
results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]
# print(solution(n, results))


def test(n, results):
    wins = [[0] * n for _ in range(n)]
    for winner, loser in results:
        wins[winner - 1][loser - 1] = 1
    print(wins)

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if wins[k][i] and wins[i][j]:
                    wins[k][j] = 1
    # 순위를 정확하게 매길 수 있는 선수의 수 계산
    answer = 0
    print(wins)
    for i in range(n):
        count = 0
        for j in range(n):
            # 선수 i가 선수 j를 이기거나, 선수 j가 선수 i를 이긴 경우 count 증가
            if wins[i][j] or wins[j][i]:
                count += 1
        # 모든 선수와의 승패 관계가 확립된 경우
        if count == n - 1:
            answer += 1


print(test(n, results))
