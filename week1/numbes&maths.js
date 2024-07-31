//================================================================================================================================
//                                                          NUMBER AND MATHS
//================================================================================================================================

const score=500

console.log(score)// return :500

const bill=new Number(100)

console.log(bill)// retrun : [Number: 100]

console.log(bill.toString())// convert a number into string 
console.log(bill.toString().length)// return the length of number 

// toFixed(): Formats a number to a fixed number of decimal places.
let num = 3.14159;
console.log(num.toFixed(2)); // Output: 3.14

//parseInt(): Parses a string and returns an integer.
let str = "123";
console.log(parseInt(str)); // Output: 123
console.log(parseInt("10", 2)); // Output: 2 (parses "10" as binary)


const othernumber=123.5436
console.log(othernumber.toPrecision(4))//return the 123.5


const hunders=100000
console.log(hunders.toLocaleString('en-IN'))



// ================================================Maths=====================================================

console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045
console.log(Math.max(1, 2, 3, 4, 5)); // Return the max value in given values Output: 5
console.log(Math)
console.log(Math.abs(-4))// abs()=>convert negative value into postive if value is postive no change into negative 
console.log(Math.round(4.2))// rund the value =>4
console.log(Math.ceil(4.6))// ceil the value  hieghts =>5 
console.log(Math.floor(4.6))// floor the values lowest value =>4 

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)+min))

