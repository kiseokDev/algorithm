# +1+1+1+1-1 = 3
# 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.


# stack DFS 반복
def solution(numbers, target):
    answer = 0
    # stack은 (idx, value)로 구성된다.
    stack = [(0, 0)]

    while stack:
        idx, value = stack.pop()
        # numbers의 길이라는 뜻은 모든 경우의 수를 다 돌았다는 뜻이다.
        if idx == len(numbers):
            if value == target:
                answer += 1

        else:
            # idx는 numbers의 인덱스를 가리키고 value는 numbers의 값을 가리킨다.
            # 두가지 케이스를 모두 stack에 넣어줘서 dfs 방식으로 탐색한다.
            stack.append((idx + 1, value + numbers[idx]))
            stack.append((idx + 1, value - numbers[idx]))
    return answer


# 재귀 DFS
def solution2(numbers, target):
    # not numbers는 모든 경우의 수를 다 돌았다는 뜻이다.
    if not numbers and target == 0:
        return 1
    elif not numbers:
        return 0

    # 아니면 끝가지 가지 않았다면 재귀적으로 탐색한다.
    else:
        return solution2(numbers[1:], target - numbers[0]) + solution2(
            numbers[1:], target + numbers[0]
        )


print(solution2([1, 1, 1, 1, 1], 3))
