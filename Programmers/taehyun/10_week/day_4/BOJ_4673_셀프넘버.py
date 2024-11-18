def d(n):
    result = n
    while n > 0:
        result += n % 10
        n = n // 10
    return result

def solve():
    self_numbers = set(range(1, 10001))
    generated = set()
    
    for num in range(1, 10001):
        generated.add(d(num))
    
    self_numbers -= generated
    
    for number in sorted(self_numbers):
        print(number)

if __name__ == "__main__":
    solve()