function solution(polynomial) {
  const result = [];
  const terms = polynomial.split("+").map((v) => v.trim());
  let confficientX = 0;
  let constant = 0;

  terms.forEach((term) => {
    if (term.includes("x")) {
      let confficient = term == "x" ? 1 : Number(term.replace("x", ""));
      confficientX += confficient;
    } else {
      constant += Number(term);
    }
  });
  if (confficientX) result.push(confficientX === 1 ? "x" : `${confficientX}x`);
  if (constant) result.push(constant);

  return result.join(" + ");
}
