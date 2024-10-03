// 1.
function solution(arr) {
  return arr.join("");
}

// 2.
function solution(arr) {
  let answer = "";
  arr.forEach((v) => {
    answer += v;
  });
  return answer;
}

// 3.

function solution(arr) {
  let answer = "";
  arr.map((v) => {
    answer += v;
  });
  return answer;
}
