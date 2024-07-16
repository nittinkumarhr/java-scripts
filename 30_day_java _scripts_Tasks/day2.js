// Day-4 : Opertor 
// 1. Arithmetic Operator
// Task :1 write a program to add two numbers
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);
// Task :2 write a program to subtract two numbers
let sub = a - b;
console.log(sub);
// Task :3 write a program to multiply two numbers
let mul = a * b;
console.log(mul);
// Task :4 write a program to divide two numbers
let div = a / b;
console.log(div);
// Task :5 write a program to find the remainder of two numbers
let rem = a % b;
console.log(rem);

// 2. Assignment Operator
// Task :1 Use the += operator to add number to the variable a.
a += 5;
console.log(a);
// Task :2 Use the -= operator to subtract number from the variable a.
a -= 8;
console.log(a);

// 3. Comparison Operator
// Task :1 write a program to compare two number useing > and < operator
let c = 10;
let d = 20;
console.log(c > d);
console.log(c < d);
// Task :2 write a program to compare two number useing >= and <= operator
console.log(c >= d);
console.log(c <= d);
// Task :3 write a program to compare two number useing == and === operator
console.log(c == d);
console.log(c === d);

// Logical Operator
// Task :1 write a program to use && operator
console.log(c > d && c < d);

// Task :2 write a program to use || operator
console.log(c > d || c < d);
// Task :3 write a program to use ! operator
console.log(!(c > d));
console.log(!(c < d));
console.log(!(c == d));

// Tenary Operator
// Task :1 write a program to use ? : operator
let e = 10;
let g = e > 0 ? "Number is positive" : "Number is negative";
console.log(g);