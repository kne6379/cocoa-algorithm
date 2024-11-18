def solution(n):
    divisors = []  # 약수를 저장할 리스트
    for i in range(1, n + 1):  # 1부터 n까지 반복
        if n % i == 0:  # 약수인지 확인
            print(f"{i}는 {n}의 약수입니다.")  # 약수인 경우 출력
            divisors.append(i)  # 약수를 리스트에 추가
        else:
            print(f"{i}는 {n}의 약수가 아닙니다.")  # 약수가 아닌 경우 출력
    total = sum(divisors)  # 약수의 합 계산
    print(f"{n}의 모든 약수: {divisors}")
    print(f"{n}의 약수의 합: {total}")
    return total

print(solution(100))
