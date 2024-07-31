// day2 -> Control Structures

// Activity 1 -> If Else Statement
// Task :1 write a program to check   if a the number is positive, negative or zero.
let num = 0;
if (num>0){
    console.log("Number is postive :",num)
}
else if (num<0){
    console.log("Number is negative :",num)
}
else{
    console.log("Number is zero :",num)
}

// Task :2 Write a program  to check  if a person is eligible to vote or not based on their age.
let age = 18;
if (age>=18){
    console.log("Eligible to vote :",age)
}
else{
    console.log("Not eligible to vote :",age)
}


// Activity 2-> Nested If Else Statement

// Task :1 Write a program to find the largest of three  numbers.
let a = 10, b = 20, c = 30;
if (a>b && a>c){
    console.log("a is largest :",a)
}
else if (b>a && b>c){
    console.log("b is largest :",b)
}
else{
    console.log("c is largest :",c)
}

// Activity 3 -> Switch Statement

// Task :1 Write a program  that uses switch case  to determine the day of the week based on  a number (1-7).
let day = 1;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// Activity 4 -> Conditional (ternary) operator

// Task :1 Write a program to check if a number is even or odd using the ternary operator.
let number = 5;
let result = (number % 2 == 0) ? "Even" : "Odd";
console.log(result);

// Activity 5 -> Combining Conditional Statements

// Task :1 Write a program to check if a year  is a leap year useing multiples conditional statements.
let year = 2000;
if (year % 4 == 0) {

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    }
    else {
        console.log(year + " is a leap year");
    }
}