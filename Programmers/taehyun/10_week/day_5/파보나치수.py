def solution(n):
    MOD = 1234567  # 모듈로 값을 미리 정의

    if n == 0:
        return 0
    elif n == 1:
        return 1

    a, b = 0, 1  # F(0) = 0, F(1) = 1
    for _ in range(2, n + 1):
        a, b = b, (a + b) % MOD  # 모듈로 연산을 적용

    return b

# 함수 테스트
if __name__ == "__main__":
    print(solution(3))    # 출력: 2
    print(solution(5))    # 출력: 5
    print(solution(10))   # 출력: 55
    print(solution(100000))  # 큰 n 값 테스트
