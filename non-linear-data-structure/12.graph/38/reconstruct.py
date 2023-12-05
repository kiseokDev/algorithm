# [From,to]로 구성된 항공권 목록을 이룔해 JFK에서 출발하는 여행 일정을 구성하라.
# 여러 일정이 있는 경우 사전 어휘순으로 방문한다.

# Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
# Output: ["JFK","MUC","LHR","SFO","SJC"]

# Input2: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
# Output2: ["JFK","ATL","JFK","SFO","ATL","SFO"]
import collections


def findItinerary(tickets):
	graph = collections.defaultdict(list)
	# 그래프 순서대로 구성
	for a, b in sorted(tickets):
		graph[a].append(b)

	route = []
	def dfs(a):
		# 첫 번째 값을 읽어 어휘 순 방문
		while graph[a]:
			dfs(graph[a].pop(0))
		route.append(a)

	dfs('JFK')
	# 다시 뒤집어 어휘 순 결과로
	return route[::-1]

print(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))