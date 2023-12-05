import heapq


def solution(array, commands):
    answer = []

    for command in commands:
        start, end, index = command
        answer.append(sorted(array[start - 1 : end])[index - 1])
    return answer


def solution2(array, commands):
    answer = []

    for command in commands:
        start, end, index = command
        result = heapq.nsmallest(index, array[start - 1 : end])
        answer.append(result[-1])

    return answer


print(
    solution2(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ],
    )
)
# [5, 6, 3]
