//0. 큐
//1. 100% 진행시 서비스 반영
// 2. 개발 속도 모두 다르나 => 뒤에 작업이 끝나도 앞의 작업이 끝나지 않으면 해결되지 않아서 기다리므로.. 쌓임
// 3. 배포 순서 : 배열로 된 progress
// 4. 각 개발 속도 : 정수 배역 speeds 일 때 각 배포바다 몇 개 기능이 배포되는지
// (배열 길이 100이하 ; 자연수 ; 하루에 한 번)

// 각 작업의 배포 가능일 구하기
// 작업을 진행하며 배포 가능일이 첫번째 작업보다 빠른 작업은 함께 배포
// 첫번째 작업의 배포 가능일 보다 늦은 작업이 나오면 2단계와 유사하게 해당 작업의 배포일을 기준으로
// 뒤 작업들을 배포. 이를 모든 작업이 완료 될때 까지 반복=> for 문의 반복
// 각 기능의 진행상태를 큐에 푸시. 왼쪽 구멍이 leftPush, 오른쪽 구멍을 rigntPop 의미

//1차시
function solution(progresses, speeds) {
  // 결과를 저장할 배열
  let answer = [];
  // 시작과 끝 선언
  let leftPush = 0;
  let rightPop = 0;

  for (let i = 0; i < progresses.length; i++) {
    //진행사항이 100 이하면 progresses에 speeds를 더하기 (이때 같은 인덱스끼리 더하도록 [i] 넣고, 몇 번 진행했는지 count 하기)
    while (progresses[i] < 100) {
      // 100미만일 경우 speeds 더하기
      progresses[i] += speeds[i];
      //  현재 진행상황 카운트
      let Progress = progresses[i];
      const countProgress = count(Progress);
      console.log(countProgress);
      // rightPop++;
 
      // return count(progresses[i], speeds[i]);
    }
    // 100보다 크면 배포 가능, leftPush 카운트 해주기
    if (progresses[i] >= 100) {
      leftPush++;
    }
  }
  // 배포한 것 푸쉬
  answer.push(leftPush);
  return answer;
}

// 2차시. 위에꺼랑 같은 대답...
function solution(progresses, speeds) {
  let answer = [];
  //진행횟수
  let count = 0;
  // 한개 기능 개발하는데 필요한 날짜계산
  // let day = 0;
  // 함께 배포할 기능의 index 저장
  let index = [];
  // 이번에 배포할 기능의 개수 추가하기

  for (let i = 0; i < progresses.length; i++) {
    if (progresses[i] < 100) {
      count++;
    } else {
      index.push(i);
    }
  }
  answer.push(count);
  return answer;
}
//

////
//   function solution(progresses, speeds) {
//     let answer = [];
//     let count = 0;
//     let index = [];

//     for (let i = 0; i < progresses.length; i++) {
//       // 각 작업이 완료되는데 필요한 일수 계산 : 100-progresses 나누기 speeds
//       const days = Math.ceil((100 - progresses[i]) / speeds[i]);
//       // 작업이 완료되는데 필요한 일수 계산한 값을 index 배열에 추가
//       index.push(days);
//     }
//     // index배열의 첫번쩨 요소로 초기화. 현재 그룹의 기준
//     let maxDay = index[0];
//     for (let i = 0; i < index.length; i++) {
//       // 현재 인덱스가 maxday 보다 작거나 같으면 카운트
//       if (index[i] <= maxDay) {
//         count++;
//       } else {
//         answer.push(count);
//         // 카운트 초기화
//         count = 1;
//         // 현재 인덱스를 maxDay로 초기화
//         maxDay = index[i];
//       }
//     }
//     answer.push(count);
//     return answer;
//   }
