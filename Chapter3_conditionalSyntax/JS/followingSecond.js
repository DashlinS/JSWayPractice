alert('Please enter the Hours, Minutes and Seconds when prompted!');

function tryAgain() {
  let hour = Number(prompt('Enter the Hours'));
  let minute = Number(prompt('Enter the Minutes'));
  let second = Number(prompt('Enter the Seconds'));

  while (((second == '') || (minute == '') || (hour == ''))) {
    console.log('Please Enter Digits');
    return Number; // If nothing is entered stop the function and display message.
  }
  
  while ((!(second <= 59) || !(minute <= 59) || !(hour <= 23))) {
    console.log('Please Use 24H');
    return Number; // If digits entered too high for clock stop the function and display message.
  }
  if (second >= 59) {
    second = '0';
    minute++;
  }
  else {
    second++;
  }
  if (minute >= 59) {
    minute = '0';
    hour++;
  }
  if (hour >= 23) {
    hour = '0';
    console.log(`${hour}h${minute}m${second}s`);
  }
  else {
    console.log(`${hour}h${minute}m${second}s`);
  }
}
tryAgain();