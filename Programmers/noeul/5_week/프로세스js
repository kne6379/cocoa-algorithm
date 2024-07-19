function solution(priorities, location) {
  var answer = 0;
  let obj = {};
  let queue = priorities.map((priorit, index) => {
    return { priorit, index };
  });

  while (priorities.length > 0) {
    obj = queue.shift();
    if (queue.some((el) => el.priorit > obj.priorit)) {
      queue.push(obj);
    } else {
      answer++;
      if (obj.index == location) break;
    }
  }
  return answer;
}
