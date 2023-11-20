# 서로 다른 정수를 입력받아 가능한 모든 수녈을 리턴하라
# 입력 : [1,2,3]
# 출력 : [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
from typing import List
def permute(nums: List[int]) -> List[List[int]]:
	result = []
	prev_elements = []

	def dfs(elements):
		# 리프 노드일 때 결과 추가
		if len(elements) == 0:
			result.append(prev_elements[:])
		
		# 순열 생성 재귀 호출
		for e in elements:
			next_elements = elements[:]
			next_elements.remove(e)
			
			prev_elements.append(e)
			dfs(next_elements)
			prev_elements.pop()

	dfs(nums)
	return result

print(permute([1,2,3]))

