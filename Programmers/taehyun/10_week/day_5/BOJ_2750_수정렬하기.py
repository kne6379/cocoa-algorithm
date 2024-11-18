def solve(numbers):
    return sorted(numbers)

if __name__ == "__main__":
    import sys
    n = int(sys.stdin.readline())
    numbers = [int(sys.stdin.readline()) for _ in range(n)]
    sorted_numbers = solve(numbers)
    for num in sorted_numbers:
        print(num)