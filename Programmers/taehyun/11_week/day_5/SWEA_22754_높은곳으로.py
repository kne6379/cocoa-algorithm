# def solution():
#     T = int(input())
#     for _ in range(T):
#         N,P = map(int,input().split())
#
#         max_floor = N * (N+1) //2
#
#         if max_floor == P:
#             max_floor -= 1
#
#         print(max_floor)
#
# solution()

def solution():
    T = int(input())
    for _ in range(T):
        N, P = map(int,input().split())

        dp = [0] * (N+1)

        for i in range(1,N+1):
            for j in range(i,0,-1):
                #현재 선택으로 i 층을 더함
                new_floor = dp[j -1 ] + i

                #p층에 도달하지 않은 경우만 갱신
                if new_floor != P:
                    dp[j] = max(dp[j],new_floor)

        print(max(dp))

solution()
