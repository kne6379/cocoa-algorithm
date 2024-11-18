def add_odd():
    T = int(input())
    for i in range(1,T+1):
        odd_sum = 0
        numbers = list(map(int, input().split()))
        for num in numbers:
            if num %2 != 0:
                odd_sum += num
        print(f"#{i} {odd_sum}")

add_odd()