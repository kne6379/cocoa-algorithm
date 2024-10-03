// 1.
function solution(my_string, k) {
  let result = "";
  while (k) {
    result += my_string;
    k--;
  }
  return result;
}

// 2.
function solution(my_string, k) {
  if (k === 0) {
    return "";
  }
  return my_string + solution(my_string, k - 1);
}
