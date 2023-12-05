# 시작점에서 도착점까지의 가장 저렴한 가격을 계산하되, K개의 경우지 이내에 도착하는 가격을 리턴하라.
# 경로가 존재하지 않을 경우 -1을 리턴하라.

# 입력 : n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
# 출력 : 500

# 다익스트라 알고리즘
# 설명 : 시작점 src 노드 0에서 도착점 dst 노드 2까지 최저가는 0->1->2로 가는 200이지만,
# 여기서는 입력값이 k = 0 으로 경유지가 하나도 없어야 하므로 
# 이 조건을 만족하는 최저가는 0-2인 500이다
import collections
from typing import List
import heapq
def findCheapestPrice(fights:List[List[int]],src:int,dst:int,K:int)->int:
	graph = collections.defaultdict(list)
	# 그래프 인접 리스트 구성
	
	for start,end,price in fights:
		graph[start].append((end,price))

	# 큐 변수 : [(가격, 정점, 남은 가능 경유지 수)]
	k=0
	Q = [(0,src,k)]

	while Q :
		price,node,k = heapq.heappop(Q)
		if node == dst:
			return price
		
		if k <=K:
			k+=1
			for end,w in graph[node]:
				alt = price + w
				heapq.heappush(Q,(alt,end,k))

	return -1






print(findCheapestPrice([[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0))