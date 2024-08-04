function solution(n, a, b) {
  let answer = 0;

  const recursion = (a, b, answer) => {
    if (a !== b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
      return recursion(a, b, answer);
    }
    return answer;
  };
  answer = recursion(a, b, answer);
  return answer;
}

console.log(solution());
