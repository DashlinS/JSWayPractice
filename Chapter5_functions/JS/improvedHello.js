// Say hello to the user
let firstName = prompt('First Name?');
let lastName = prompt('Last Name?');

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

console.log(sayHello(firstName, lastName));

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result