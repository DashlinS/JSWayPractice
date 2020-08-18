let a = 2; 
a -= 1;
a++; // Displays 2
let b = 8;
b += 2; // Displays 10
const c = a + b * b; // Displays 102
const d = a * b + b; // Displays 30
const e = a * (b + b); // Displays 40
const f = a * b / a; // Displays 10
const g = b / a * a; // Displays 10
console.log(a, b, c, d, e, f, g); // Displays 2, 10, 102, 30, 40, 10, 10