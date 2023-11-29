# 모든 부분 집합을 리턴하라

# nums = [1, 2, 3]
# 출력 :[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

# 트리의 모든 dfs 결과 
from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
	result = []

	def dfs(index, path):
		# 매번 결과 추가
		result.append(path)
		
		# 경로를 만들면서 DFS
		for i in range(index, len(nums)):
			dfs(i+1, path+[nums[i]])
	
	dfs(0, [])
	return result

print(subsets([1,2,3]))