# Given an integer array nums and an integer k, return the kth largest element in the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct element.

# Can you solve it without sorting?


import heapq
from typing import List


class Solution:
    def findKthLargest1(self, nums: List[int], k: int) -> int:
        heap = list()
        for n in nums:
            heapq.heappush(heap, -n)

        for _ in range(1, k):
            heapq.heappop(heap)

        return -heapq.heappop(heap)

    def findKthLargest2(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)

        for _ in range(len(nums) - k):
            heapq.heappop(nums)

        return heapq.heappop(nums)

    def findKthLargest3(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]

    def findKthLargest(self, nums: List[int], k: int) -> int:
        # nums.sort()
        # return nums[-k]
        return sorted(nums, reverse=True)[k - 1]


solution = Solution()
nums = [3, 2, 1, 5, 6, 4]
result = solution.findKthLargest3(nums, 2)
print(result)


def test(nums):
    heapq.heapify(nums)

    heapq.heappush(nums, 0)
    print(nums)


print(heapq.nsmallest(2, nums)[-1])
print(heapq.nlargest(6, nums))
