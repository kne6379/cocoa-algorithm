def solution(num):

    if not isinstance(num,int):
        raise TypeError("정수형이 아닙니다")

    if num == 1:
        return 0

    count = 0

    while num != 1 and count < 500:
        if num % 2 == 0:
            num = num // 2 
        else:
            num = num * 3 + 1
        count += 1

    return count if num == 1 else -1

if __name__ == "__main__":
    print(solution(6))      # 출력: 8
    print(solution(16))     # 출력: 4
    print(solution(626331)) # 출력: -1 (500번 이내에 1이 되지 않음)
    print(solution(1))      # 출력: 0