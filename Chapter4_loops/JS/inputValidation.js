function tryAgain() {
  let number = prompt('Is this number 50 and 100?');
  while ((number >= 50) && (number <= 100)) {
    console.log(`Yes, ${number} is between 50 and 100!`);
    break;
  }
  while ((number >= 100) || (number <= 50)) {
    console.log(`No, ${number} is not between 50 and 100!`);
    tryAgain();
    break;
  }
}
tryAgain();
