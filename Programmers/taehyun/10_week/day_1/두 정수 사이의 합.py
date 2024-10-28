def is_valid_element(n):
    return -10000000 <= n <= 10000000


def solution(a,b):
    if not is_valid_element(a) or not is_valid_element(b):
        raise ValueError("입력 오류")

    min_value = min(a,b)
    max_value = max(a,b)
    n = max_value - min_value + 1
    

    total_sum = (n* (min_value + max_value)) //2 

    return total_sum


if __name__ == "__main__":

    print(solution(3,5))
    print(solution(1,10))
    print(solution(2,9))

    # 예외 테스트
    try:
        print(solution(10000001, 0))  # ValueError: 입력 오류
    except ValueError as e:
        print(e)