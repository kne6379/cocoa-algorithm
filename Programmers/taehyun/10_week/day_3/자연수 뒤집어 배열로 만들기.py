def solution(n):
    # Step 1: 숫자를 문자열로 변환
    str_num = str(n)
    
    # Step 2: 문자열을 리스트로 변환하고 각 문자를 정수로 변환
    num_list = [int(digit) for digit in str_num]
    
    # Step 3: 리스트를 뒤집기
    reversed_list = num_list[::-1]
    
    return reversed_list

# 함수 테스트
if __name__ == "__main__":
    print(solution(12345))  # 출력: [5, 4, 3, 2, 1]
    print(solution(10000))  # 출력: [0, 0, 0, 0, 1]
