def solution(num):
    if 1<= num <= 1_000_000_000:
        sum_of_digits = 0
        while num > 0:
            sum_of_digits += num % 10
            num //= 10
        return sum_of_digits
    else:
        return "입력된 숫자가 범위를 초과하였습니다"


try:
    num = int(input("입력값:"))
    result = solution(num)
    print(f"자릿수의 합 : {result}")
except ValueError:
    print("잘못된 입력값:")