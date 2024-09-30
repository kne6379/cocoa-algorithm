function solution(babbling) {
  var answer = 0;
  const sound = ["aya", "ye", "woo", "ma"];
  babbling.forEach((val) => {
    for (const el of sound) {
      if (val.includes(el)) {
        val = val.replace(el, " ");
      }
    }
    if (val.trim() == "") {
      answer++;
    }
  });
  return answer;
}
