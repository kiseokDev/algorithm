from typing import List
# 1을 육지로 0을 물로 가정한 2D 그리드 맵이 주어졌을 때, 섬의 개수를 계산하라.
# (연결되어 있는 1의 덩어리 개수를 구하라)
# 입력
# 11110
# 11010
# 11000
# 00000

# 출력
# 1
def numIslands(grid) -> int:

	count = 0
	for i in range(len(grid)) : 
		for j in range(len(grid[0])) : 
			if grid[i][j] == '1' : 
				dfs(i, j)
				# 모든 육지 탐색 후 카운트 1 증가
				count += 1
	return count

def dfs(i, j) : 
	# 더 이상 땅이 아닌 경우 종료
	if i < 0 or i >= len(grid) or \
		j < 0 or j >= len(grid[0]) or \
		grid[i][j] != '1' : 
		return
	grid[i][j] = '0'
	dfs(i + 1, j)
	dfs(i - 1, j)
	dfs(i, j + 1)
	dfs(i, j - 1)


grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]

print(numIslands(grid)) # 1

def outer_function(a:List[int]):
	b: List[int] = a
	print(id(b),b)
	def inner_function1():
		b.append(4)
		print(id(b),b)
	
	def inner_function2():
		print(id(b),b)
		
	inner_function1()
	inner_function2()

outer_function([1,2,3])