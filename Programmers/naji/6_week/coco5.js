//내 식
function solution(priorities, location) {
  var answer = 0;
  // 첫번째 요소를 가장 큰 값으로 초기화
  let largest = priorities[0];
  // 반복문 돌리기
  for (let i = 0; i < priorities.length; i++) {
    // location 의 숫자가 priorities 배열에 몇번째인자 그 숫자를 찾아서 순서를 계산
    if (location === priorities[i]) {
      // location의 숫자가 priorities 배열에 몇 번째인지 순서찾아서 계산
      answer = i;
    }
  }

  return largest;
}


//첫번째 요소를 가장 큰 값으로 초기화
//반복문 돌리기
//location 의 숫자가 priorities 배열에 몇번째인자 그 숫자를 찾아서 순서를 return
function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  var answer = 0;
  // 첫번째 요소를 가장 큰 값으로 초기화
  let largest = priorities[0];
  //index =0 선언?
  // 반복문 돌리기
  for (let i = 0; i < priorities.length; i++) {
    // 현재 요소가 큰 값이면 큐에 넣기
    if (priorities[i] > largest) {
      largest = priorities[i];
    }

    //location 이 몇번째인지 찾아서 순서를 계산 후 푸쉬
    if (location.index === priorities[i]) {
      answer = i;
    }
  }
}

//주석으로 지피티 돌려서 실행한 식 ; 일단 상단의 주석의 설명은 맞음
function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ priority, index }));
  let order = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (queue.some((item) => item.priority > current.priority)) {
      queue.push(current);
    } else {
      order++;
      if (current.index === location) {
        return order;
      }
    }
  }
}
