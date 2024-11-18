#조건 : array : 자연수로 이루어져있고, 길이는 1 이상
#각 arr 배열을 for 문으로 순회하면서 divisor로 입력된 값을 나눈다. 이때 나머지가 없으면 해당 값을 answer 배열에 넣고 return값으로 출력한다.

def solution(arr,divisor):
    if not all(isinstance(x,int) and x > 0 for x in arr):
        raise ValueError("arr은 자연수로 이루어져야 합니다.")
    if not isinstance(divisor,int) or divisor <= 0:
        raise ValueError("divisor는 자연수여야 합니다.")
    if len(arr) < 1:
        raise ValueError("arr의 길이는 1 이상이어야 합니다")
    if len(set(arr)) != len(arr):
        raise ValueError("arr내 중복값이 허용되지 않습니다.")

    answer = sorted([num for num in arr if num % divisor == 0])
    return answer if answer else [-1]

print(solution([5, 9, 7, 10], 5))   # 출력: [5, 10]
print(solution([-2, -36, 1, 3], 1))   # 출력: [2, 36, 1, 3]
print(solution([3, 2, 6], 10))      # 출력: [-1]