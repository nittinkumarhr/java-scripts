 // day : 7-> Objects
// Activity 1 : objects creation and  accessing
// Task 1 :-Create a objects reperseting a book with properties like titile ,author, and year and consloe it
let book = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  year: 1997,
}
console.log(book)
// Access and log the title  and author properties of the book object
console.log('Title of the book is :',book.title, 'and the author is :',book.author)

// Activity 2 : Objects methods
// Task 1 :- Add a method to that returns  a string with the book title and author and log it
book.titleAndAuthor = function(){
  return `[Iner function :]The title of the book is ${this.title} and the author is ${this.author}`
}
console.log(book.titleAndAuthor())
// Task 2 :- Add a method to the book object that takes a parameter (year) and update the book year propertiy then log it 
let book1 = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  year: 1997,
  mk:function(){
    this.year=2000
    console.log(this.year)
  }
}
// console.log(book1.mk(),book1.year)
// Activity 3 : Nested Object
// Task 1 :-Created a nested object representing a libarey with properties  like name and books (an array of objects)and log the liberay objects to the consloe 
const lib={
  name:"Prog lib",
  book:[{
    title:"Harry Potter",
    author:"J.K.Rowling",
    year:1997,
  
  },
  {
    title:"Harry Potter2",
    author:"J.K.Rowling",
    year:1998,
},
  {
    title:"Harry Potter3",
    author:"J.K.Rowling",
    year:1999,
}]
}
console.log(lib)
// Task 2:- Access and log the name of the libery and the titles of all the books in the libery 

console.log(`Libery Name :,${lib.name} Books Titles :`)

console.log("Book Titles:");
lib.book.forEach((book) => {
  console.log("- " + book.title);
});

// Activity 4 : The This keyword
// Task 1 : Add the method  to the book objects that uses the this keyword to return a string with the book title and year  and log it 
console.log(book1.mk(),book1.year)

// Activity 5 : Object Iterations
// Task 1  : use a for in loop to iterate over the book object and log the book title and year
for (let key in book1) {
    console.log(key + ": " + book1[key]);
}
// Task  2 : Use Objects.keys and Objects.methods to log all the keys and values  of the book object
console.log(Object.keys(book1),Object.values(book1))