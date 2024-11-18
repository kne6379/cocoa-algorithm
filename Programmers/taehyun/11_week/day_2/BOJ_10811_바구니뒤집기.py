#스와프 이용하기
#제한조건
def isvalid(N,M,i,j):
    #N과 M의 유효성 검사
    if not (1 <= N <= 100):
        raise ValueError("N의 입력범위를 벗어났습니다")
    
    if not (1 <= M <= 100):
        raise ValueError("M의 입력범위를 벗어났습니다")
    
    # i와 j가 범위를 벗어나면 예외 발생
    if not (1 <= i <= j <= N):
        raise ValueError(f"i와 j의 입력 범위를 벗어났습니다. (1 ≤ i ≤ j ≤ N)")

def solution():
    try:
        N,M = map(int, input().split())
        #N,M 유효성검사
        isvalid(N,M,1,1) # i와 j는 아직 입력받지 않았기때문에 상수 1 넣음

        # N개의 바구니 초기화, 1부터 N까지 번호가 적힌 바구니
        bag = list(range(1,N+1))

        #역순 작업
        for _ in range(M):
            i,j = map(int,input().split())
            
            #i,j 유효성 검사
            isvalid(N,M,i,j)

            #주어진 범위를 역순으로 진행
            bag[i-1:j] = bag[i-1:j][::-1]

        print(' ' .join(map(str,bag)))
            
    except ValueError as e:
        print(e)

solution()