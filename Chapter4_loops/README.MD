[Jump down to JS problems](#jump_down)

# Loops

## While loop

A while loops repeats the code while a condition remains true.

A while loop is displayed as 
while(condition) {
  //code running while the condition is true. The code here is called the `body`.
}

## For loop

A for loop is based on the variable updated in the body.

A for loop works like this
for (initialization; condition; final expression) {
  // code to run while the condition is true.
}

> Initialization only happens once, when the code first kicks off. It's often used to set the initial value of the variable associated to the loop condition.

> The condition is evaluated once before the loop runs each time. If it's true, the code runs. If not, the code doesn't run.

> The final expression is evaluated after the loop runs each time. It's often used to update the value of the variable associated with the loop condition, as we saw in the previous example.

`To avoid an infinite loop, the loop condition must eventually become false.`

## <a name="jump_down">Coding Challenges!</a>

### Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/carousel.js)

### Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.

```
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}
```

Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

This program must show exactly 10 numbers including the first one, not 11 numbers!

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/parity.js)


### Input validation
Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/inputValidation.js)

### Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/multiplication.js)

### Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/yesNorNo.js)

### FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:

It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter4_loops/JS/fizzBuzz.js)