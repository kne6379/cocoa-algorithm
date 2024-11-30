function solution(quiz) {
  const operatorMap = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
  };
  return quiz.map((v) => {
    const [operand1, operator, operand2, , result] = v.split(" ");
    return operatorMap[operator](Number(operand1), Number(operand2)) ===
      Number(result)
      ? "O"
      : "X";
  });
}
