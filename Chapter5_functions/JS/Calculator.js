function calculate(x, y, z) {
  y == "+";
  y == "-";
  y == "*";
  y == "/";

  let plus = x + z;
  let minus = x - z
  let times = x * z
  let divide = x / z

  if (y == "+") {
    return plus;
  }
  if (y == "-") {
    return minus;
  }
  if (y == "*") {
    return times;
  }
  if (y == "/") {
    return divide;
  }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
