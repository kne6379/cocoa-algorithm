def solve(n):
    return '\n'.join(str(i) for i  in range(1,n+1))
    #입력받은 정수 N에 대해 1부터 N까지의 숫자를 문자열로 변환한 후, 각 숫자를 \n으로 구분하여 하나의 문자열로 반환

if __name__ == "__main__":
    import sys
    # sys 모듈로 python 인터프린터 사용
    n = int(sys.stdin.read())
    # 입력된 문자열을 숫자로 변환
    print(solve(n))