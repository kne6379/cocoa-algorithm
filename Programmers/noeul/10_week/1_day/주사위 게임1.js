// 홀수 판별하여 분기별로 값을 반환

function solution(a, b) {
  const isAOdd = isOdd(a);
  const isBOdd = isOdd(b);
  let answer = 0;

  if (isAOdd && isBOdd) {
    answer = a ** 2 + b ** 2;
  } else if (isAOdd || isBOdd) {
    answer = 2 * (a + b);
  } else {
    answer = Math.abs(a - b);
  }
  return answer;
}

//홀수 판별 함수
function isOdd(number) {
  return number % 2 !== 0;
}
