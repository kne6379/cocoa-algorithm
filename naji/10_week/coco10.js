//1. https://school.programmers.co.kr/learn/courses/30/lessons/181952
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});

//2. https://school.programmers.co.kr/learn/courses/30/lessons/181916
function solution(a, b, c, d) {
    let answer = 0
  const count = {};
  
  // 각 숫자의 빈도수 계산
  [a, b, c, d].forEach(num => {
      count[num] = (count[num] || 0) + 1;
  });
  //4개 일 때
  if (Object.values(count).includes(4)){
      answer = 1111*a
  //3개 일 때
  } else if (Object.values(count).includes(3)){
       const p = Math.max(a,b,c,d);
      const q = Math.min(a,b,c,d);
      answer = Math.pow((10 * p + q),2)
  
  //2개씩 일 때 
  } else if (Object.values(count).includes(2)){
    const p = Math.max(a,b,c,d);
    const q = Math.min(a,b,c,d);
    if(count[p] === count[q] ===2){
        answer = (p + q) * Math.abs(p - q)
    } else {
        answer = q * r;
    } return answer
    
  //2개, 1개, 1개일때
  } 
  else if (Object.values(count).includes(1)){
      answer = Math.min(a,b,c,d)
  }
  return answer;
}
