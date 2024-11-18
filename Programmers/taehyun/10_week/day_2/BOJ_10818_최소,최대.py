#1
N =int(input())
if N< -1000000 or  N > 1000000:
    print("unvalue")
else:
    A = input().split()[:N]
    A = list(map(int,A))

print(min(A),max(A))

#2
def find_min_max(nums):
    return min(nums), max(nums)

# 테스트
numbers = [1, 2, 3, 4, 5]
print(find_min_max(numbers))  # 출력: (1, 5)