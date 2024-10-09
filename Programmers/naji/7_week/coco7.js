//참가자 n 명 게임은 1,2번 3,4번 등 1번째 게임에서 n/2번 게임 예정 -> 이긴 사람은 다음 게임
//몇번을 돌아야해? 얘는 몇 번 돌아야하는지 모르겠는데

// while (조건) {
//     실행코드
// }

function solution(n, a, b) {
  var answer = 0;
  //n은 사람 a는 사람1 b는 사람2
  //a와 b 차이가 1이 될 때 인데 , b가 짝수이고 a가 홀수 여야 짝이 될듯 => 같은 수가 되야 같은 경기에서 만남
  //반대조건일 경우...?

  if (a < b && b % 2 === 0) {
    while (a - b !== 1) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      answer++;
    }
  }

  return answer;
}


//참가자 a 와 참가자 b가 몇번째 게임에서 붙을 건지?

function solution(n, a, b) {
  //매 라운드 마다 새로운 번호 계산
  let round = 0;
  //a와 b가 같아질 때 까지 반복
  while (a !== b) {
    //a랑 b가 같은 경기에서 만나려면 2로 나눴을 때 정수가 같아야함
    //a가 1일 때(0.5) 올림 하면 1, b가 2일 때(1) 올림 하면 1 이므로
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    //돌린 라운드 수 더하기
    round++;
  }

  return round;
}
