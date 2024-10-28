def solve(a):
    if not all(isinstance(x, int) for x in a):
        raise ValueError("모든 입력은 정수여야 합니다.")
    return sum(a)

# 함수 테스트

if __name__ == "__main__":
    try:
        data = []
        print("숫자들을 입력하세요. 끝내려면 빈 줄을 입력하세요:")
        while True:
            line = input()
            if not line:
                break
            data.extend(map(int, line.split()))
        print(solve(data))
    except ValueError as e:
        print(e)
