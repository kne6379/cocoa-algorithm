#pseudo code 
"""변수 초기화
n ← 이름의 길이/ answer ← 0 (총 조작 횟수) 

#알파벳 변경 최소 조작 횟수 계산
for char in name: 알파벳 변경 조작 횟수를 계산하여 answer에 더함
    위로 이동하는 횟수: ord(char) - ord('A')
    아래로 이동하는 횟수: ord('Z') - ord(char) + 1
    두 값 중 작은 값 선택하여 더함

#좌우 이동 최소화 계산
min_move ← n - 1 (오른쪽으로 끝까지 가는 경우를 기본값으로 설정)
    for i from 0 to n - 1:
    next_i ← i + 1
    while next_i < n and name[next_i] == 'A':
        next_i를 1씩 증가시켜 연속된 'A' 구간 건너뜀

#커서를 왼쪽으로 돌아간 후 오른쪽으로 다시 이동하는 경로 계산:
    i + i + n - next_i 계산 (오른쪽으로 이동 후 되돌아오는 경로)
    i + (n - next_i) + (n - next_i) 계산 (왼쪽으로 돌아가서 이동하는 경로)
두 이동 경로 중 더 작은 값을 min_move로 갱신
#최종 결과 계산
answer ← answer + min_move (최소 커서 이동 횟수와 알파벳 변경 횟수를 더함)

결과 반환
return answer
"""
def solution(name):
    n = len(name)
    answer = 0
    
    # 알파벳 변경 횟수 계산
    for char in name:
        answer += min(ord(char) - ord('A'), ord('Z') - ord(char) + 1)
    
    # 좌우 이동 최소화
    min_move = n - 1  # 기본적으로 오른쪽으로 쭉 가는 경우
    for i in range(n):
        next_i = i + 1
        while next_i < n and name[next_i] == 'A':
            next_i += 1
        # 오른쪽으로 가는 경로와 왼쪽으로 돌아가는 경로 모두 고려
        min_move = min(min_move, i + i + n - next_i, i + (n - next_i) + (n - next_i))

    answer += min_move
    return answer
