function solution(keyinput, board) {
  var answer = [0, 0];
  const boardX = Math.floor(board[0] / 2);
  const boardY = Math.floor(board[1] / 2);

  keyinput.forEach((idx) => {
    switch (idx) {
      case "left":
        if (answer[0] > -boardX) {
          answer[0] -= 1;
        }
        break;
      case "right":
        if (answer[0] < boardX) {
          answer[0] += 1;
        }
        break;
      case "up":
        if (answer[1] < boardY) {
          answer[1] += 1;
        }
        break;
      case "down":
        if (answer[1] > -boardY) {
          answer[1] -= 1;
        }
        break;
    }
  });
  return answer;
}
