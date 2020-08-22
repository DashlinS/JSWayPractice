/* While loops */
let number = (prompt('How many turns for the carousel?'));
turn = 0;

while (turn < number) {
  turn++;
  console.log(`${turn} Turns`);
}

/* For loops */
number = prompt('How many turns for the carousel?');

for (let turn = 1; turn <= number; turn++) {

  console.log(`${turn} Turns`);
}