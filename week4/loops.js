      // ------------------------------------------------------------------------------------------------------------
// loops 
//------------------------------------------------------------------------------------

// for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
//   }

  // Example
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // Output:
  // 0
  // 1
  // 2
  // 3
  // 4
  // ------------------------------------------------------------------------------------------------------------
  // while loop
  // while (condition) {
  //     // code to be executed
  //   }    
  // Example
  let i = 0;
  while (i < 5) {
      
    console.log(i);
    i++;    
  }
  // Output:
  // 0
  // 1
  // 2
  // 3
  // 4
  // ------------------------------------------------------------------------------------------------------------
  // do while loop
  // do {
  //     // code to be executed
  //   } while (condition);
  // Example
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  // Output:
  // 0
  // 1
  // 2
  // 3
  // 4
  // ------------------------------------------------------------------------------------------------------------
  // for in loop -> 
  // for (variable in object) {
  //     // code to be executed
  //   }
// Example:

  const person = {
    
        name: 'John',
    age: 30,
    gender: 'male' 
}
  for (let key in person) {
    console.log(key + ': ' + person[key]);

}
  // Output:
  // name: John
  // age: 30
  // gender: male
  // ------------------------------------------------------------------------------------------------------------
  // for of loop ->
  // for (variable of iterable) {
  //     // code to be executed
  //   }
  // Example:
  const fruits = ['apple', 'banana', 'mango'];
  for (let fruit of fruits) {
    console.log(fruit);
  }
  // Output:
  // apple
  // banana
  // mango  

// const name="Hell o World"
// for (n of name){
//     console.log(n)
// }
// Output: H e l l  o  W o r l d

  // differnce between for in and for of loop
  // for in loop :) used to iterate over the properties of an object.
  // for of loop :) used to iterate over the values of an iterable object (such as an array or a string).
  
//   ------------------------------------------------------------------------------------------------------------
// Acces the objects useing for of loop 
// ------------------------------------------------------------------------------------------------------------
// const data = {name:"John",age:30,gender:"male"};
// for(d of data){
//     console.log(d)// TypeError: data is not iterable 
// }

// ------------------------------------------------------------------------------------------------------------
// Acces the Array useing for in loop
// ------------------------------------------------------------------------------------------------------------
const data = [1,2,3,4,5,'ssss'];
for (d in data){
    console.log(d)// return the array index
    console.log(data[d])// return the array value
}

//------------------------------------------------------------------------------------------------------------------------
// forEach loop
//------------------------------------------------------------------------------------------------------------------------
// The forEach() method calls a function for each element in an array. It does not return a new array.  
// Example: 
const codeig=['js','php','python','ruby','c']
codeig.forEach(function(element){
    // console.log(element)
})// Output: js php python ruby c
// call back function is no name in forEach loop
// forEach loop is useing arrow function  
// ------------------------------------------------------------------------------------------------------------
// Example:
const pk = ['apple', 'banana', 'mango'];
pk.forEach((items,index,arr)=>{
  console.log(items,index,arr);
  
});
// Output: apple 0 [ 'apple', 'banana', 'mango' ]




// ------------------------------------------------------------------------------------------------------------
// Example
//-------------------------------------------------------------------------------------------------------------

const mycode=[
{name:'js',price:100},
{name:'php',price:200  },
{name:'python',price:300},
{name:'ruby',price:400},
]
mycode.forEach(items=>{
    console.log(items.name,items.price)
  })

// Output: js 100 php 200 python 300 ruby 400
    