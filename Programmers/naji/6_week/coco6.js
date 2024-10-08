function solution(arr1, arr2) {
  var answer = [];
  let yArr1 = arr1.length;
  let xArr2 = arr2[0].length;
  let xArr1 = arr1[0].length;
  //i = 배열1의 세로축 도는중
  for (let i = 0; i < yArr1; i++) {
    //큰 배열 안에 값 넣기
    let result = [];
    //j = 배열2의 가로축
    for (let j = 0; j < xArr2; j++) {
      let sum = 0;
      for (let k = 0; k < xArr1; k++) {
        //arr1 과 arr2 곱한 값 을 돌면서 더하기
        sum += arr1[i][k] * arr2[k][j];
        
        //k = arr1에서 가로축 길이
        //arr1 [i][k] arr2[k][j]
      }
      result.push(sum);
    }
    answer.push(result);
  }
  return answer;
}
