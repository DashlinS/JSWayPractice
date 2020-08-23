function min(x, y) {
  let num1 = x;
  let num2 = y;

  if (x <= y) {
    return (x);
  }
  else {
    return (y);
  }
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1