#1
n = int(input())
sum = 0
for i in range(1, n+1):
    sum += i

print(sum)

#2
def sum_n(n):
    return n * (n + 1) // 2

# 테스트
print(sum_n(10))  # 출력: 55