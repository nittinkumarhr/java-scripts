// Day 8 - JavaScript: Es6 Features
// Actuvity 1 - Template Literals :)
// Task 1 :- Use template literals to create a string that displays the value of the variable name and age.
// const name = "John";
// const age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);


// Task 2 :- Crete a multiline string using template literals.
console.log(`This is a
multiline
string.`);

// Activity 2 - Destructuring Assignment
// Task 1:- Use array destructuring to extract  the first and second elements from an array of numbers and log them to the consle 
//  destructuring :-: A syntax for unpacking values from arrays or properties from objects into distinct variables.
const arr=[1,2]
const[a,b]=arr
console.log('destructuring :',a,b)

// Task 2 :-Use object destructuring to extract the title and author from a book object and log it 
const book={
    title:'JavaScript: The Good Parts',
    author:'Douglas Crockford',
}
const {title,author}=book
console.log('title :',title,'author :',author)

// Activity 3 - Spread and Rest Operator
// Task 1 :- Use the spread operator to create a new array that includes all the elements of an existing array plus addtional elements .

const arr1=[1,2,3,4,5]
const arr2=[...arr1,6,7,8,9]
console.log('spread operator :',arr2)

// Task 2 :- Use the rest operator to create a function to accepts an arbitry number of arguments ,sum them return it.
const sum=(...args)=>args.reduce((a,b)=>a+b)
console.log('rest operator :',sum(1,2,3,4,5,6,7,8,9))

// Activity 4 - Default Parameters
// Task 1 :- Write a function that takes two parameters and returns their product. If the second parameter is not provided, use a default value of 10.
const product=(a,b=10)=>a*b
console.log('default parameters :',product(5))

// Activity 5  -Enhanced Object Literals
// Task 1 :- Use enhanced object literals to create an object with methods and properties and log the object to the console.
const name = 'Alice';
const age = 30;
const hobby = 'reading';

const computedProperty = 'favoriteColor';

const person = {
  // Property shorthand
  name,
  age,
  hobby,

  // Method definitions
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  [computedProperty]: 'blue'    
};

console.log(person);
console.log(person);

// Access and invoke methods
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
console.log(`My favorite color is ${person.favoriteColor}.`); // Output: My favorite color is blue
