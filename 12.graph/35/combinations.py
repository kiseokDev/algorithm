# 전체 수 n을 입력받아 k개의 조합을 리턴하라
# 입력 : n = 4, k = 2
# 출력 : [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]

from typing import List

# DFS로 K개 조합 생성
def combine(n: int, k: int) -> List[List[int]]:
	result = []
	
	def dfs(elements, start: int, k: int):
		if k == 0:
			result.append(elements[:])
		
		# 자신 이전의 모든 값을 고정하여 재귀 호출
		for i in range(start, n+1):
			elements.append(i)
			dfs(elements, i+1, k-1)
			elements.pop()
	
	dfs([], 1, k)
	return result

print(combine(4, 2))