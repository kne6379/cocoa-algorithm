// 1번 풀이
function solution(a, b) {
  var answer = Math.max(
    Number(String(a) + String(b)),
    Number(String(b) + String(a))
  );
  return answer;
}

// 2번 풀이
function solution(a, b) {
  var answer = Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
  return answer;
}
