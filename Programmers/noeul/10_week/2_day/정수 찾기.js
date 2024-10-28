function solution(num_list, n) {
  return num_list.filter((v) => v === n) < 1 ? 0 : 1;
}
