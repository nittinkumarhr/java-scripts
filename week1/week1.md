# -------------Week 1  Java Scripts-----------------------------

---

## java scripts =>          Rember the Name       *Brendan Eich*

* JavaScript is an *object-based scripting language* which is lightweight and cross-platform.

* JavaScript is not a compiled language, but it is a translated language.
* The JavaScript *Translator (embedded in the browser)* is responsible for translating the JavaScript code for the web browser.

* which is used by several websites for scripting the webpages.

* JavaScript has no connectivity with Java programming language.
**The name was suggested and provided in the times when Java was gaining popularity in the market.**

## Features of JavaScript =>

* All popular web browsers support JavaScript as they provide built-in execution environments.

* JavaScript follows the syntax and structure of the C programming language.

* light-weighted and interpreted language.

* case-sensitive language.

---

## Variable =>

* A JavaScript variable is simply a name of storage location.

* There are two types of variables in JavaScript :<br>

 1. local variable => local variable is declared inside block or function. It is accessible within the function or block only.<br>

 `function abc(){  
var x=10;//local variable  
consloe.log(x)// Ascess inside the function
}
consloe.log(x)// no  Assceble out side the function
`
  <br>

 2. global variable => global variable is accessible from any function. A variable i.e. declared outside the function or declared with window object is known as global variable. For example:

 `var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}`

## Rules of varibles Nameing   =>

* Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign

* After first letter we can use digits (0 to 9), for example value1.

* JavaScript variables are case sensitive, for example x and X are different variables.

---

## Data Types =>

* JavaScript provides different data types to hold different types of values.

* There are two types of data types in JavaScript.

1. Primitive data type =>

* Var =>
  * function block : If you declare varible with var inside a function  it is only assible with in function
  * Hoisting: if you declare a varible used before declartion  print undefiend
  * Re-declaration: You can re-declare a variable with var within the same scope.

      `
      function exampleVar() {
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10
}
exampleVar();
`

* Let =>

  * Scope: Block-scoped. It is local to the block (enclosed by {}) where it is declared.

  * Hoisting: Variables declared with let are hoisted but not initialized, so accessing them before declaration results in a ReferenceError.

  * Re-declaration: You cannot re-declare a variable with let within the same scope.

    `function exampleLet() {
    console.log(y); // ReferenceError
    let y = 20;
    console.log(y); // 20
}
exampleLet();`

* Const =>

  * Scope: Block-scoped, like let.

  * Hoisting: Variables declared with const are hoisted but not initialized, so accessing them before declaration results in a ReferenceError.

  * Re-declaration: You cannot re-declare a variable with const within the same scope.

    `function exampleConst() {
    const z = 30;
    console.log(z); // 30
    // z = 40; // TypeError: Assignment to constant variable.}
    `

2. Non-primitive (reference) data type

   * Object : represents instance through which we can access members.

   * Array : represents group of similar values.

   * RegExp : represents regular expression

### JavaScript is a *dynamic type language*, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine

---

## TYPE CONVERSION

* Explicit Conversion: Use functions **like String(), Number(), Boolean(), parseInt(), and parseFloat()** to manually convert types.

* String(value): Converts any value to a string.
* value.toString(): Converts the value to a string. Note that null and undefined do not have a toString method.
* Number(value): Converts a value to a number.

* parseInt(value, radix): Parses a string and returns an integer. The radix parameter is used to specify the base of the numeral system.

* Boolean(value): Converts a value to a boolean. The values 0, NaN, null, undefined, and the empty string "" convert to false; all other values convert to true.

---

##   Basic    OPERTIONS

* JavaScript ===> type coercion==>Automatic or implicit conversion of values from one data type to another (such as strings to numbers and vice versa) during operations.

1. Concatenation with Strings:
    * When a string is involved in an operation with another type (like a number), JavaScript will coerce the other type to a string and then perform string concatenation.
    Example: "1" + 2 results in "12".

2. Order of Operations:

    * JavaScript evaluates expressions from left to right.
    * If the first operation involves a string, subsequent
       operations will follow the string concatenation rule.
      Example: "1" + 2 + 22 results in "1222" because "1" + 2 is evaluated first to "12", and then "12" + 22 is evaluated to "1222".
    * When only numbers are involved before a string is encountered, JavaScript performs the arithmetic operations first.
     Example: 1 + 2 + "22" results in "322" because 1 + 2 is evaluated first to 3, and then 3 + "22" is evaluated to "322"

---

## comparison of datatypes  => 

* Equality (==) and Inequality (!=) =>
   
    - These operators convert the operands to the same type before making the comparison.

* Strict Equality (===) and Strict Inequality (!==)  
 =>

   -  These operators do not convert the operands to the same type. Both value and type must be the same to return true.

---


#   data summary =>


* 

| Type       | Type of Return Value | Object Wrapper |
|------------|----------------------|----------------|
| Null       | "object"             | N/A            |
| Undefined  | "undefined"          | N/A            |
| Boolean    | "boolean"            | Boolean        |
| Number     | "number"             | Number         |
| BigInt     | "bigint"             | BigInt         |
| String     | "string"             | String         |
| Symbol     | "symbol"             | Symbol         |


---
 
# Memory Management   

* JavaScript has an automatic memory management system, primarily utilizing garbage collection to reclaim memory that is no longer in use.

  Primitive Types (number, string, boolean, null, undefined, symbol, bigint)=>:stack is used for static memory allocation, such as primitive types and function calls. 

  Reference Types (array, function, object):heap is used for dynamic memory allocation, such as objects, arrays, and functions. 

* This changes only v2. The value of v1 remains unchanged because v1 and v2 are independent copies of the string.

* Primitive Values: 
                In JavaScript, primitive values (such as strings, numbers, booleans, etc.) are copied by value. 
                This means that when you assign one variable to another varible, a new copy of the value is created. 
                Changes to one variable do not affect the other.
Independent Copies: v1 and v2 are independent copies of the string value. Changing v2 does not change v1.


* Since d1 and d2 refer to the same object, this change is reflected in both d1 and d2.

* Objects by Reference: In JavaScript, objects are assigned and copied by reference, not by value.
Shared Reference: Both d1 and d2 refer to the same object in memory. Changing the object via one reference affects  the boths.


---

# String =>

* string is set of charcater

* immutable=>:once a string is created, it cannot be changed.Any operation that appears to modify a string actually creates a new string.

* three way to declare the string 

  1. let str1 = "Hello, World!";//Using double quotes

  2. let str2 = 'Hello, World! 2';//Using single quotes

  3. let str3 = `Hello, World! 3`;//Using backticks (template literals)

# String Properties and Methods   =>

* The **length()** property returns the number of characters in a string.

* You can access individual characters in a string using **bracket notation[]**.

* **charAt(index)** Returns the character at the specified index.

* **indexOf(substring)** Returns the index of the first occurrence of the specified substring, or -1 if not found.

* **slice(start, end)** Extracts a section of a string and returns it as a new string.

* **substring(start, end)** Similar to slice, but does not accept negative indices.
 
* **substr(start, length)** Extracts a substring starting from the start index and extending for a given number of characters (length).

* **toUpperCase()** Converts the entire string to uppercase.

* **toLowerCase()** Converts the entire string to lowercase.

* **replace(substring, newSubstring)** Replaces the first occurrence of a substring with a new substring.

* **split(separator)** Splits the string into an array of substrings based on the specified separator.

* **trim()** Removes whitespace from both ends of a string.


---

# NUMBER AND MATHS


* **JavaScript has only one type for numbers, which can represent both integer and floating-point values.**

### Number Methods  =>

* **toFixed()** Formats a number to a fixed number of decimal places.

* **toString()** Converts a number to a string.

* **parseInt()** Parses a string and returns an integer. 

* **parseFloat()** Parses a string and returns a floating-point number.

### MATHS  =>

* The Math object provides properties and methods for mathematical constants and function

### Commonly Used Methods =>

* **Math.abs(x)** Returns the absolute value of x.

* **Math.ceil(x)** Rounds x up to the nearest integer.

* **Math.floor(x)** Rounds x down to the nearest integer.


* **Math.round(x)** Rounds x to the nearest integer.

* **Math.max(...values)** Returns the largest of zero or more numbers.

* **Math.min(...values)** Returns the smallest of zero or more numbers.

* **Math.pow(base, exponent)** Returns the base to the power of the exponent.

* **Math.sqrt(x)** Returns the square root of x.

* **Math.random()** Returns a random number between 0 (inclusive) and 1 (exclusive).

  - Example :)

  ` console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)+min))  `


