[Jump down to JS problems](#jump_down)

# Conditional Syntax

A `condition` is an expression that checks if the code is true of false. It is called a `boolean` value. If it is true then the condition is fulfilled. 

Javascript `boolean` represents true or false

## If statement

```
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}
```

An `if` statement takes the (condition) and will console.log only if the condition is true. 

Boolean expressions can be made with the following comparison operators

| Operator  | Meaning                 |
| --------- |:-----------------------:|
| ===       | Equal                   |
| !==       | Not equal to            |
| <         | Less than               |
| <=        | Less than or equal to   |
| >         | Greater than            |
| >=        | Greater than or equal to|


# Alternative conditions

## Else statement

Applies when the condition fails to meet the requirements, the program will execute the alternative condition in its place to continue the program. 

```
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}
else {
  console.log(`${number} is negative or zero`);
}
```

### Else if

This statement follows an if statement and checks to see if the condition is true, if the previous condition was false. The program runs through both statements and if both
come out false, then the `else` statement is applied. 

```
const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}
```

## "And" Operator

Identified by the `&&` double ampersand, this operator checks to see if both sub-conditions are true.


## "Or" Operator

Identified by the `##` double octothorpe, this operator checks to see if at least one of the sub-conditions are true.

### non-boolean values

"In JavaScript, a value or an expression that can be converted to false is said to be falsy. If, on the contrary, it can be converted to true, it is so-called truthy. All values are considered truthy except for the following falsy ones:"

``` false
undefined
null
NaN (Not A Number)
0
"" or ''
```

## <a name="jump_down">Coding Challenges!</a>

### Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter3_conditionalSyntax/JS/followingDay.js)

### Number comparison
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter3_conditionalSyntax/JS/numberCompare.js)

### Final values
Take a look at the following program.

```
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
```

Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

|Initial values| nb1 final value | nb2 final value | nb3 final value
|--------------|-----------------|-----------------|-----------------|
|nb1=nb2=nb3=4 | | |
|nb1=4,nb2=3,nb3=2| | |
|nb1=2,nb2=4,nb3=0| | |

Check your predictions by executing the program.

### Number of days in a month
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter3_conditionalSyntax/JS/daysInMonth.js)

### Following second
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:
14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)

[JS Answer](https://github.com/DashlinS/JSWAY/blob/master/Chapter3_conditionalSyntax/JS/followingSecond.js)
