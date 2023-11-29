def solution(survey, choices):
    scores = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}
    choice_to_score = {
        1: 3, # 매우 비동의
		2: 2, # 비동의
        3: 1, # 약간 비동의
        4: 0, # 모르겠음
        5: 1, # 약간 동의
    	6: 2, # 동의
        7: 3, # 매우 동의
	}

    for idx, types in enumerate(survey):
        score = choice_to_score[choices[idx]] # 점수
        disagree, agree = types[0], types[1] # 비동의, 동의

		
        if choices[idx] < 4:
            scores[disagree] += score
        elif choices[idx] > 4:
            scores[agree] += score

    answer = ''.join([
        'R' if scores['R'] >= scores['T'] else 'T',
        'C' if scores['C'] >= scores['F'] else 'F',
        'J' if scores['J'] >= scores['M'] else 'M',
        'A' if scores['A'] >= scores['N'] else 'N'
    ])

    return answer

# 사용 예시
survey = ['AN', 'CF', 'MJ', 'RT', 'NA']
choices = [5, 3, 2, 7, 5]
print(solution(survey, choices))  # TCMA