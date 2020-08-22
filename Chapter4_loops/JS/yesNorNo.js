function doAgain() {
  let word = prompt('~Neither Yes nor No~');
  yes = 'yes';
  no = 'no';

  while ((word == yes) || (word == no)) {
    console.log('You Lose!');
    break;
  }

  if (((word !== yes) && (word !== no) && (word !== ''))) {
    console.log('You Win!');
    doAgain();
  }

  else if (word == '') {
    alert('No, Seriously');
    doAgain();
  } 
}
doAgain();