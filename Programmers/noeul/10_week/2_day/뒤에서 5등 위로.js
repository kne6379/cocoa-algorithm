function solution(num_list) {
  num_list.sort((a, b) => a - b).splice(0, 5);
  return num_list;
}
