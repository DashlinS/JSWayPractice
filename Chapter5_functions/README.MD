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

