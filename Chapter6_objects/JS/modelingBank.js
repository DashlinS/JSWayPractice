const alex = {

  name: "Alex",
  balance: 0,
};
function describe(credit) {
  return `Owner: ${credit.name}, balance: ${credit.balance} `;
}

console.log(describe(alex));

alex.balance += 250;
alex.balance -= 80;

console.log(describe(alex));