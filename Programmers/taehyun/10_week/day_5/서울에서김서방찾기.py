def solution(seoul):
    index = seoul.index("Kim")
    return f"김서방은 {index}에 있다"

# 함수 테스트
if __name__ == "__main__":
    print(solution(["Jane", "Kim"]))  # 출력: 김서방은 1에 있다