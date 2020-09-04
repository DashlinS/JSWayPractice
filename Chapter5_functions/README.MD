[Jump down to JS problems](#jump_down)

# Functions 

A function is a group of statements that performs a specific task. They are created using the `function` keyword.
There are several ways to create a function.

> function declaration
> function expression
> fat arrow syntax


## Function declaration 

This declaration is performed with keyword function, followed by function name in ().
Statements that make up the function reside in the body enclosed in curly braces {}.

Functions must be called in order to run. You can call the function by writing the name of the function followed by the ().

### Return value
Indicates the function will return a value. Specified after the keyword. This value can be retrieved by the caller.

Return values can be any type (number, string, etc) but a function can only return one value.
A function stops running immediately after the return statement is executed. Any further statements are never run.

If there is no value, `undefined` is returned.

the return statement, if separated by line terminator 
```
return 
a + b
```
It is affected by `ASI` meaning `automatic semicolon insertion`. It is transformed into
``` 
return;
a + b;
```
To avoid this use parentheses! 
return (
  a + b
);

### Local Variables

Local Variables are the variables declared in the body of a function. They are unable to be used outside of the function.

### Parameters

A parameter is information that the function needs in order to work. The function parameters are defined in parentheses immediately following the name of the function. You can then use the parameter value in the body of the function.

When calling the function, you add the parameter value. This value is called an `argument`

Like local variables, the scope is limited to the function body.
Respecting the number and order of variables is important.

### Fat arrow => Functions

Simplified and concise way of creating anonymous functions. Heavily used in JS 

### Examples of JS functions

Math.min() - Returns minimum number among its arguments

Math.random() - Generates a random number between 0 and 1 


## <a name="jump_down">Coding Challenges!</a>

## Improved hello

Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
```
// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result
```
[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter5_functions/JS/improvedHello.js)

## Number squaring

Complete the following program so that the square1() and square2() functions work properly.

```
// Square the given number x
function square1(x) {
  // TODO: complete the function code
}

// Square the given number x
const square2 = x => // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
```

When it's done, update the program so that it shows the square of every number between 0 and 10.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter5_functions/JS/numberSquare.js)

## Minimum of two numbers

Let's pretend the JavaScript Math.min() function doesn't exist. 
Complete the following program so that the min() function returns the minimum of its two received numbers.

```
// TODO: write the min() function

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
Calculator

Complete the following program so that it offers the four basic arithmetical operations: 
addition, subtraction, multiplication and division. 
You can use either a function declaration or a function expression.

// TODO: complete program

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
```

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter5_functions/JS/numberSquare.js)

## Circumference and area of a circle

Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.

```
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3
```

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter5_functions/JS/Circumference.js)
