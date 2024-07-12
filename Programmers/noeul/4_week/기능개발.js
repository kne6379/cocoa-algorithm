function solution(progresses, speeds) {
  var answer = [];
  let day = [];
  let count = 0;

  progresses.forEach((program, index) => {
    count = 0;
    while (program < 100) {
      program = program + speeds[index];
      count++;
    } // 100의 작업량을 채울 때 까지 작업 속도를 더한다. 카운트 체크
    day.push(count);
  }); // 작업기간 배열에 저장

  let checkDay = day[0];
  count = 1;

  for (let i = 1; i < day.length; i++) {
    if (checkDay >= day[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      checkDay = day[i];
    }
  }
  answer.push(count);
  return answer;
}

// 작업이 완료되어도 앞선 작업이 끝나야 배포 가능
// 각 progresses 돌며 완료까지 며칠이 걸리는 지 산출 => 배열에 저장
// 작업 기간 checkDay에 저장
// 다음 작업 기간과 비교
// 비교 checkday >= day[1] -> count++ , else 일 때는 answer.push(count) 값 초기화 다시 반복,
// 모든 배열을 다 돌았을 때 다시 answer.push
// 자료구조로 다시 풀기
