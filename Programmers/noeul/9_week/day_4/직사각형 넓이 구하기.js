function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const width = Math.abs(dots[0][0] - dots[2][0]);
  const height = Math.abs(dots[0][1] - dots[1][1]);

  return width * height;
}

// 1. x값을 기준으로 정렬
// 2. width는 x값이 동일하지 않은 좌표
// 3. height는 y값이 동일하지 않은 좌표
// 4. width * height = area
