// 첫번째 풀이
function solution(arr, k) {
  if (k % 2) {
    arr.forEach((v, idx) => {
      arr[idx] = v * k;
    });
  } else {
    arr.forEach((v, idx) => {
      arr[idx] = v + k;
    });
  }
  return arr;
}

const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));
