'''def add_xy(A,B,N):
    xy_sum = A+B
    for i in range():
        if xy_sum <= N:
            xy_sum += B
            i += 1
        else:
            break
        return i


def add_yx(A,B,N):
    yx_sum = A+B
    for j in range():
        if yx_sum <= N:
            yx_sum += A
            j += 1
        else:
            break
        return j

def solution():
    T = int(input())
    for _ in range(T+1):
        A,B,N = map(int, input().split())
        if(add_xy(A,B,N) > add_yx(A,B,N)):
            print(add_xy())
        else:
            print(add_yx())



solution()
'''

def min_operations(A,B,N):
    count = 0
    #x와 y중 작은값은 큰값에 더한다

    while A<=N and B<=N:
        if A<B:
            A += B  #A가 작으면 A+=B

        else:
            B += A #B가 작으면 B+=A
        count += 1

    return  count

def solution():
    T = int(input())
    for _ in range(T):
        A,B,N = map(int, input().split())
        print(min_operations(A,B,N))

solution()