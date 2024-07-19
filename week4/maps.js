/////// fillters -:// filter() method creates a new array with all elements that pass the test implemented by the provided function.
//provide function that returns the values if condtions is true
//return new {array with all elements that pass the test.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
//output: [2, 4, 6, 8, 10]
const oddNumbers = numbers.filter((number) => {
  if (number % 2 !== 0) {
    return number;
  }
});
// console.log(oddNumbers);
// use for each loop
const newnum=[]
numbers.forEach((number) => {
  if (number % 3 == 0) {
    newnum.push(number);
  }
  
})
// console.log(newnum)

const books=[{
  title:"Harry Potter",
  author:"J.K.Rowling",

  year:2005
},
{
  title:"The Hobbit",
  author:"J.R.R.Tolkien",
  year:1937
},
{
  title:"The Lord of the Rings",
  author:"J.R.R.Tolkien",
  year:1954
},
{
  title:"The Great Gatsby",
  author:"F. Scott Fitzgerald",
  year:1925
}]



const userbook=books.filter((book)=>book.year>2000)
console.log(userbook)

// map method -: it is used to create a new array by applying a function to each element of an array.
// it returns a new array with the results of calling a provided function on every element in the calling array.

const mynumbers=[1,2,3,4,5,6,7,8,9,10]

const newnumbers=mynumbers.map((number)=>number*2)
console.log(newnumbers)

// chaninge 

const newnumbers2= mynumbers.map((number)=>number*2).filter((number)=>number>10)

// reduce method -: it reduces the array to a single value by executing a reducer function on each element of the array, resulting in a single output value.

const mynum=  [1,2,3,4,5,6,7,8,9,10]

// const mytotal=mynum.reduce(function(acc,curentvalue){
//   return acc+curentvalue
// },0)
//Arrow function
const mytotal=mynum.reduce((acc,curentvalue)=>acc+curentvalue,0)
console.log('reduce',mytotal)

