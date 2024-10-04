function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common.pop() + (common[1] - common[0])
    : common.pop() * (common[1] / common[0]);
}

// 등차수열: 같은 차가 계속 더해짐
// 등비수열: 같은 비가 계속 곱해짐
