import sys

sys.stdin = open("sample_input.txt", "r")

DIRECTIONS = [(0, 1), (0, -1), (1, 0), (-1, 0)]


def is_valid(grid, x, y, direction, N):
    """해당 방향으로 전선을 설치할 수 있는지 확인"""
    dx, dy = direction
    nx, ny = x + dx, y + dy

    while 0 <= nx < N and 0 <= ny < N:
        if grid[nx][ny] != 0:  # 빈 공간이 아니면 설치 불가
            return False
        nx += dx
        ny += dy
    return True


def install_wire(grid, x, y, direction, N):
    """해당 방향으로 전선을 설치하고 전선의 길이를 반환"""
    dx, dy = direction
    nx, ny = x + dx, y + dy
    length = 0
    while 0 <= nx < N and 0 <= ny < N:
        grid[nx][ny] = 2  # 전선 설치
        length += 1
        nx += dx
        ny += dy
    return length


def remove_wire(grid, x, y, direction, N):
    """해당 방향으로 설치한 전선을 제거"""
    dx, dy = direction
    nx, ny = x + dx, y + dy
    while 0 <= nx < N and 0 <= ny < N and grid[nx][ny] == 2:
        grid[nx][ny] = 0
        nx += dx
        ny += dy


def dfs(grid, cores, index, connected_cores, wire_length, N):
    """백트래킹을 활용한 최대 코어 연결 및 최소 전선 길이 탐색"""
    global max_cores, min_wire_length

    # 모든 코어를 탐색한 경우
    if index == len(cores):
        # 최대 코어 연결 여부 확인
        if connected_cores > max_cores:
            max_cores = connected_cores
            min_wire_length = wire_length
        elif connected_cores == max_cores:
            min_wire_length = min(min_wire_length, wire_length)
        return

    x, y = cores[index]

    # 현재 코어에서 가능한 모든 방향으로 전선 설치 시도
    for direction in DIRECTIONS:
        if is_valid(grid, x, y, direction, N):
            length = install_wire(grid, x, y, direction, N)
            dfs(grid, cores, index + 1, connected_cores + 1, wire_length + length, N)
            remove_wire(grid, x, y, direction, N)

    # 현재 코어를 연결하지 않고 다음 코어로 넘어가는 경우
    dfs(grid, cores, index + 1, connected_cores, wire_length, N)


def solution():
    T = int(input())
    for t in range(1, T + 1):
        N = int(input())
        grid = [list(map(int, input().split())) for _ in range(N)]

        cores = []
        for i in range(N):
            for j in range(N):
                # 가장자리에 있는 코어는 이미 연결된 것으로 간주
                if grid[i][j] == 1 and not (i == 0 or i == N - 1 or j == 0 or j == N - 1):
                    cores.append((i, j))

        global max_cores, min_wire_length
        max_cores = 0
        min_wire_length = float('inf')

        # 백트래킹 시작
        dfs(grid, cores, 0, 0, 0, N)
        print(f"#{t} {min_wire_length}")


solution()
