from enum import Enum
import heapq
from typing import List


class Command(Enum):
    INSERT = "I"
    DELETE = "D"


def solution(operations: List[str]):
    heap = []

    for operation in operations:
        command, number = operation.split()
        number = int(number)

        if Command(command) == Command.INSERT:
            heapq.heappush(heap, number)
        elif Command(command) == Command.DELETE:
            if len(heap) == 0:
                continue
            if number == -1:
                heapq.heappop(heap)
            if number == 1:
                # heap.pop()# 큰값 index 찾아서 pop 하던지 nlargest(1,heap)[0]
                # heap.pop(heap.index(heapq.nlargest(1,heap)[0]))
                heap.remove(heapq.nlargest(1, heap)[0])

    if len(heap) == 0:
        return [0, 0]

    return [heapq.nlargest(1, heap)[0], heapq.nsmallest(1, heap)[0]]


print(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]))  # [0, 0]
print(
    solution(
        ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
    )
)
#     [333, -45],


def solution(operations: List[str]):
    heap = []
    for operation in operations:
        command, number = operation.split()
        if command == "I":
            heapq.heappush(heap, int(number))
        elif command == "D":
            if len(heap) == 0:
                continue
            if number == "-1":
                heapq.heappop(heap)
            else:
                heap.pop()
    if len(heap) == 0:
        return [0, 0]
    return [heapq.nlargest(1, heap)[0], heapq.nlargest(len(heap), heap)[-1]]
