// 뒤에서 5등까자의 숫자를 반환

function solution(num_list) {
  num_list.sort((a, b) => a - b).splice(0, 5);
  return num_list;
}
