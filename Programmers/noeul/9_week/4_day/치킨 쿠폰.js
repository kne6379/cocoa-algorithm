// 반복을 사용한 풀이
function solution(chicken, result = 0) {
  if (chicken >= 10) {
    result += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
    return solution(chicken, result);
  }
  return result;
}

// 계산 공식을 사용한 풀이
const solution = (chicken) => parseInt((chicken - 1) / 9);
