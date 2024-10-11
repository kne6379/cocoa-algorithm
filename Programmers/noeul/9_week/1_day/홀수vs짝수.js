function solution(num_list) {
  let oddSum = 0;
  let evenSum = 0;
  num_list.forEach((v, idx) => {
    idx % 2 === 0 ? (evenSum += v) : (oddSum += v);
  });
  return Math.max(oddSum, evenSum);
}
