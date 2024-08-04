function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((val, i) =>
      row.reduce((acc, val, j) => acc + idx * arr2[j][i], 0)
    )
  );
}
