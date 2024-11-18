'''
함수 solution(video_len, pos, op_start, op_end, commands):
    # 단계 1: 시간 문자열을 초 단위로 변환하는 함수 정의
    함수 convert_to_seconds(time_str):
        분, 초 = time_str을 ":"로 분리하여 정수로 변환
        반환 (분 * 60) + 초
    
    함수 convert_to_mmss(seconds):
        분 = seconds // 60
        초 = seconds % 60
        반환 문자열 "{분:02}:{초:02}"
    
    # 단계 2: 모든 시간 관련 입력을 초 단위로 변환
    video_length_sec = convert_to_seconds(video_len)
    current_pos_sec = convert_to_seconds(pos)
    op_start_sec = convert_to_seconds(op_start)
    op_end_sec = convert_to_seconds(op_end)
    
    # 단계 3: 초기 위치가 오프닝 구간에 있는지 확인하고, 건너뛰기
    만약 op_start_sec <= current_pos_sec <= op_end_sec 이라면:
        current_pos_sec = op_end_sec
    
    # 단계 4: 각 명령을 순차적으로 처리
    반복문을 commands 리스트에서 각 command에 대해 수행:
        만약 command가 "prev" 이면:
            current_pos_sec 에서 10초를 빼고, 0보다 작으면 0으로 설정
            current_pos_sec = max(0, current_pos_sec - 10)
        
        만약 command가 "next" 이면:
            current_pos_sec 에 10초를 더하고, 동영상 길이를 초과하면 동영상 길이로 설정
            current_pos_sec = min(video_length_sec, current_pos_sec + 10)
        
        # 명령 처리 후, 현재 위치가 오프닝 구간에 있는지 확인하고, 필요 시 건너뛰기
        만약 op_start_sec <= current_pos_sec <= op_end_sec 이라면:
            current_pos_sec = op_end_sec
    
    # 단계 5: 최종 위치를 "mm:ss" 형식으로 변환하여 반환
    반환 convert_to_mmss(current_pos_sec)
'''

def solution(video_len, pos, op_start, op_end, commands):
    # 시간 문자열을 초로 변환하는 함수
    def time_to_seconds(time_str):
        minutes, seconds = map(int, time_str.split(':'))
        return minutes * 60 + seconds
    
    # 초를 "mm:ss" 형식으로 변환하는 함수
    def seconds_to_time(seconds):
        minutes = seconds // 60
        secs = seconds % 60
        return f"{minutes:02d}:{secs:02d}"
    
    # 초기 설정
    video_length = time_to_seconds(video_len)
    current_pos = time_to_seconds(pos)
    opening_start = time_to_seconds(op_start)
    opening_end = time_to_seconds(op_end)
    
    # 초기 위치가 오프닝 구간에 있는지 확인하고, 건너뛰기
    if opening_start <= current_pos <= opening_end:
        current_pos = opening_end
    
    for command in commands:
        if command == "prev":
            current_pos -= 10
            if current_pos < 0:
                current_pos = 0
        elif command == "next":
            current_pos += 10
            if current_pos > video_length:
                current_pos = video_length
        
        # 명령을 처리한 후, 현재 위치가 오프닝 구간에 있는지 확인하고, 건너뛰기
        if opening_start <= current_pos <= opening_end:
            current_pos = opening_end
    
    return seconds_to_time(current_pos)
print(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]))  # Output: "13:00"
print(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))  # Output: "06:55"