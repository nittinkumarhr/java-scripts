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

## comparison of datatypes   

