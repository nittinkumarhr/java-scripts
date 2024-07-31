//  Day :- 5 Functions
// Activity 1 - Functions Declaration
// Task 1: Write a function to checlk if a number is even or odd.
function evenodd(number){
    if (number%2==0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
console.log('Number  :',evenodd(21))
// Task :2 Write a function  to calculate the square of a number .
function sq(num){
    return num**2
}
console.log('square :',sq(2))

// Activity 2 - Function Experstion 
// Task 1 : Write a function expression to find maximum of two numbers
let a=12
let b=33 
function grater(a,b){
    if (a>b){
        return a
    }
    else{
        return b
    }

}
console.log("maximum of two numbers : ",grater(a,b))

// Task 2 :- Write a function experession to concate two string .
let str1="Hello"
let str2=" World"
function con(str1,str2){
    return str1+str2
}
console.log("Concate String",con(str1,str2))

// Activity 3 -: Arrow Functions 
// Task 1 -: Write a Arrow function to calculate sum
let num1=22
let num2=23
const r=(num1,num2)=>{
    return num1+num2
}
console.log("Sum :",r(num1,num2))

// Task 2 -: Write an arrow fucntio   to check if a string contains a specific Character 
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("Hello",'e'));

// Activity 4 -: Function Parameters and  Default Parameters
// Task 1 :- Write a function that takes two parameters and return their product.provide default values for the parameters if they are not passed.
function product(a,b=4){
    return a*b
}
console.log('Product :',product(2,3))

// Task 2 :- Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age parameter if it is not passed.
function greeting(name,age=22){
    
    return `Hello ${name} your age is ${age}`
}
console.log(greeting('Rahul', 23))

// Activity 5 -: Higher Order Functions
// Task 1 :- Write a higher order function that takes a function and a number and calls the function n times.
function higherOrderFunction(func, n) { func(); func(); func(); func() }
console.log(higherOrderFunction(()=>console.log('Hello'),4))

// Task 2 :- Write a higher order function that takes  two functions and a value,applies the first function to the value and then applies the second function to the result.
const applyFunctions = (func1, func2, value) => func2(func1(value));
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result); 
