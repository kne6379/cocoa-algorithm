function solution(array) {
  const hashMap = new Map();

  array.forEach((v) => {
    hashMap.set(v, (hashMap.get(v) || 0) + 1);
  });

  let maxFreq = 0;
  let result = [];

  for (const [key, value] of hashMap) {
    if (value > maxFreq) {
      maxFreq = value;
      result = [key];
    } else if (value === maxFreq) {
      result.push(key);
    }
  }

  return result.length > 1 ? -1 : result[0];
}
