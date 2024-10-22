function solution(n_str) {
  let i = 0;
  while (n_str[i] === "0") {
    i++;
  }
  return n_str.slice(i);
}
