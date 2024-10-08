function solution(balls, share) {
  return Math.round(
    calculateFactorial(balls) /
      (calculateFactorial(share) * calculateFactorial(balls - share))
  );
}

function calculateFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// 자바스크립트의 소수점 문제 참조
