# 풀이 링크 : https://velog.io/@xxooxx99/1-Algorithm-%EA%B0%80%EC%9E%A5-%EB%A8%BC-%EB%85%B8%EB%93%9C
# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49189?language=python3

from collections import deque

def solution(n, edge):
    # 그래프 생성
    graph = [[] for _ in range(n + 1)]
    for u, v in edge:
        graph[u].append(v)
        graph[v].append(u)
    
    # 거리 배열 및 BFS 준비
    dist = [-1] * (n + 1)
    dist[1] = 0
    
    queue = deque([1])
    while queue:
        current = queue.popleft()
        for neighbor in graph[current]:
            if dist[neighbor] == -1:
                dist[neighbor] = dist[current] + 1
                queue.append(neighbor)
    
    # 가장 멀리 떨어진 노드 찾기
    max_distance = max(dist)
    return dist.count(max_distance)
