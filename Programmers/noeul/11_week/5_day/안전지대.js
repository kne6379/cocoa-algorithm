function solution(board) {
  const boardSize = board.length;
  const directions = [
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [0, 1],
    [0, -1],
  ];
  let safeCount = 0;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      // 지뢰가 있는 위치에서만 주변 위험 구역을 설정
      if (board[i][j] === 1) {
        directions.forEach(([dx, dy]) => {
          const newRow = i + dx;
          const newCol = j + dy;
          // 유효한 범위 내에 있는지 확인한 후, 위험 구역으로 설정
          if (
            newRow >= 0 &&
            newRow < boardSize &&
            newCol >= 0 &&
            newCol < boardSize &&
            board[newRow][newCol] === 0
          ) {
            board[newRow][newCol] = 2;
          }
        });
      }
    }
  }

  // 안전한 위치(값이 0인 경우)를 카운트
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell === 0) safeCount++; // 안전한 위치일 경우 safeCount 증가
    });
  });
  return safeCount;
}
