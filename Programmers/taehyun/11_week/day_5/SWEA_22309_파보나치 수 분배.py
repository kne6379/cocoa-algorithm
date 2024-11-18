def generate_fibonacci(n):
    fib = [1,1] #f(1) =1 #f(2) = 1
    while len(fib) <= n:
        fib.append(fib[-1] + fib[-2])
    return fib[:n]

def partition_fiboonacci(n,fib,target):
    result = ['B'] * n #일단 모두 B로 설정
    current_sum = 0
    for i in range(n,0,-1):
        if current_sum + fib[i-1] <= target:
            result[i-1] = 'A' #끝부터 더해서 중간값보다 작으면 A로 변환
            current_sum += fib[i-1]
        if current_sum == target:
            break
    return  result


def main():
    T = int(input())
    for _ in range(T):
        N = int(input())
        fib = generate_fibonacci(N)
        total_sum = sum(fib)

        if total_sum %2 != 0:
            print("impossible")
        else:
            target = total_sum // 2
            result = partition_fiboonacci(N,fib,target)
            print("".join(result))

main()