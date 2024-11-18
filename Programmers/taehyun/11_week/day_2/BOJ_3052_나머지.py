# def solution():
#     answers = []
#     count = 0
#     for i in range(10):
#         N = int(input())
#         #print(percent(N))
#         if percent(N) in answers:
#            pass
#         else:
#             answers.append(percent(N))
#             count += 1
#     print(count)



# def percent(N):
#     percent_answer = N % 42
#     return percent_answer

# solution()

#효율적인 코드 작성하기
#굳이 함수 선언 필요 없이 set, list는 중복 제거 부분에서 최악의 경우 O(n^2)까지 나오기때문에, set을 쓰는게 더 효율적인 코드

def solution():
    answers = set() #중복제거를 위한 집합 사용
    for _ in range(10):
        N = int(input())
        answers.add(N % 42) #나머지를 바로 집합에 추가
    print(len(answers)) #집합의 길이 = 서로 다른 나머지의 갯수

solution()