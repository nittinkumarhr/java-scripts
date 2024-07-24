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
// Task 2 :- Add a method to that returns  a string with the book title and author and log it