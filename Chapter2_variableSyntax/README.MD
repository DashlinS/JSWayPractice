[Jump down to JS problems](#jump_down)

# Variables 

**Role of a variable**
  A variable is a information storage area. Computers store data using variables. 

## Properties
Learned the three main properties 
1. Name - identifies variable. *May contain upper and lowercase, numbers, and characters ($, _)* 
1. Value - Data stored in variable.
1. Type - Determines role and actions available to variable.

**_Important_**
> Javascript is dynamically typed so you don't have to define a variable type.
> While languages like C or Java require variable types to be defined

Learned what _Declaring_ a variable means. That `let` is used, previously `var`(which can still be used) and `const` to declare a variable.


**Undefined**
Undefined type is displayed when indicating no value. 

**Constant** 
When the initial value of a variable doesn't change during program execution. This is enforced with the *const* keyword instead of let to declare it.

## Increment Operator
* `pre-increment`

    ++x increment x by 1 then use new value of x in the expression.

* `post-increment`
 
    x++ use current value of x then increment by 1.

* `pre-decrement`

    --x decrement x by 1 then use new value of x in the expression.

* `post-decrement`

    x-- use current value of x then decrement by 1.


# Learned
 
"=" is an assignment operator. It does express mathematical equality. 

Learned **Variable Scope** where the scope is the part of the program that is visible and usable. Let and const are block-scoped.

Learned **Expressions** which is a piece of code that produces a value. This is created by combining variables, values and operators.

Learned **Template Literal** is an expression included in a string using backticks. Inside a `template literal`, expressions are identified by the ${expression} syntax. 

Learned `prompt('')` command allows interaction with the user for user input.
Regardless of data entered, this always returns a string value. If to be converted to numerical expressions, it _must_ be converted into a number with the `Number()` command.

## <a name="jump_down">Coding Challenges!</a>

### Improved hello

Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter2_variableSyntax/JS/improvedHello.js)

### Final values

Observe the following program and try to predict the final values of its variables.

``` 
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
```
Check your prediction by executing it.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter2_variableSyntax/JS/finalValues.js)

### VAT calculation
Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter2_variableSyntax/JS/VAT_Calc.js)

### From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

` The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32. `

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter2_variableSyntax/JS/degreesChange.js)

### Variable swapping
Observe the following program.
```
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)`

console.log(number1); // Should show 3

console.log(number2); // Should show 5
```
Add the necessary code to swap the values of variables number1 and number2

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter2_variableSyntax/JS/variableSwap.js)
