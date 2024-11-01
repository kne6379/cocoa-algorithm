function solution(my_string, alp) {
  let result = "";
  let i = 0;
  while (my_string.length > i) {
    if (my_string[i] === alp) {
      result += alp.toUpperCase();
    } else {
      result += my_string[i];
    }
    i++;
  }
  return result;
}

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
