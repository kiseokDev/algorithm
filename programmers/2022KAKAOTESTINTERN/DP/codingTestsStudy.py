import heapq

def solution(alp, cop, problems):
    # 초기 상태를 큐에 저장 (알고력, 코딩력, 시간)
    queue = [(alp, cop, 0)]
    # 방문한 상태를 저장하는 set
    visited = set()
    
    while queue:
        # 현재 상태를 가져옴
        current_alp, current_cop, current_time = heapq.heappop(queue)
        
        # 이미 방문한 상태인 경우 skip
        if (current_alp, current_cop) in visited:
            continue
        
        # 방문한 상태로 표시
        visited.add((current_alp, current_cop))
        
        # 모든 문제를 풀 수 있는지 확인
        all_problems_solved = True
        for alp_req, cop_req, _, _, _ in problems:
            if current_alp < alp_req or current_cop < cop_req:
                all_problems_solved = False
                break
        
        if all_problems_solved:
            return current_time
        
        # 가능한 다음 상태를 큐에 추가
        for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
            next_alp = current_alp - alp_req + alp_rwd
            next_cop = current_cop - cop_req + cop_rwd
            next_time = current_time + cost
            
            # 음수 값이 되면 skip
            if next_alp < 0 or next_cop < 0:
                continue
            
            heapq.heappush(queue, (next_alp, next_cop, next_time))
    
    # 모든 문제를 푸는 것이 불가능한 경우
    return -1

# 테스트 케이스
print(solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]]))  # 15
print(solution(0, 0, [[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]])) 