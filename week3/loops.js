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
  // for in loop
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
  // for of loop
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

  // differnce between for in and for of loop
  // for in loop :) used to iterate over the properties of an object.
  // for of loop :) used to iterate over the values of an iterable object (such as an array or a string).


