function solution(dots) {
  const [a, b, c, d] = dots;
  if (calc(...a, ...b) === calc(...c, ...d)) return 1;
  if (calc(...a, ...c) === calc(...b, ...d)) return 1;
  if (calc(...a, ...d) === calc(...b, ...c)) return 1;

  return 0;
}

function calc(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}
