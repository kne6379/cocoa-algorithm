#건물 조망권
#맨왼쪽,맨오른쪽 두칸은 컨물이 x
#빌딩 높이 최대 255
#N - 테스트 케이스(건물의 갯수)
#주어진 건물의 높이를 리스트로 받아옴, 그리고 해당 리스트에서 양옆의 두개의 리스트와 숫자를 비교하여 가장 높은 숫자를 뺌
#만약 해당 리스트값보다 양쪽 두개씩, 총 4개의 수중 큰 값이 있다면, 해당 리스트의 조망권은 0 이됨

def solution():
    N = int(input())
    buildings = list(map(int, input().split()))
    bulidings_sum = 0
    #테스트케이스(건물의 갯수), 건물의 높이 받아오기

    #각 건물의 높이를 양쪽으로 2개씩 비교하기,각 맨왼쪽 두개와 맨 오른쪽 2개는 0이기때문에, 이를 참고하여 코드를 작성해야됨
    #양쪽중 가장 큰 값을 빼서 조명권에 더해줘야함. 이를 리스트 끝까지 반복
    for i in range(2,N-2):
        buildings[i] -= max(buildings[i-2], buildings[i-1], buildings[i+1], buildings[i+2])
        buildings_sum += buildings[i]

    print(f"#{i} {buildings_sum}")


solution()

