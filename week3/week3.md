# -----------------------------------------Week3-------------------------------------

## Function :)

* JavaScript function is a block of code designed to perform a particular task. It encapsulates a set of instructions that can be reused throughout a program. Functions can take parameters, execute statements, and return values, enabling code organization, modularity, and reusability

    `function myFunction(g1, g2) {
        return g1 / g2;
    }
    const value = myFunction(8, 2); // Calling the function
    console.log(value);`

### How to use a single varible  to multiple values store usering rast opertor

    `function multiplefun(...num){
    return num
    } 

    console.log(multiplefun(12,23,45,43,21))// return the first ietms`

## Scopes

* JavaScript, "scope" refers to the current context of code, which determines the accessibility of variables and functions at different parts of your code. Understanding scope is crucial because it affects how variables and functions are seen and used.

### Types of Scope in JavaScript

1. Global Scope :)

    * Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

        `var globalVar = "I am a global variable";
        function displayGlobalVar() {
            console.log(globalVar); // Accessible here
        }
        displayGlobalVar();
        console.log(globalVar); // Accessible here too`

2. Local Scope :)

    * Variables declared within a function or block have local scope and can only be accessed within that function or block.

### 1.Function Scope :)

* Function Scope Variables declared within a function are function-scoped. They can only be accessed withihat function.

    `function myFunction() {
            var functionScopedVar = "I am a function-scoped variable";
            console.log(functionScopedVar); // Accessible here
            }
            myFunction();
            console.log(functionScopedVar); // Error: functionScopedVar is not defined
            `

### Block Scope :)

* Variables declared with let or const within a block (a set of curly braces {}) are block-scoped.

    `{
    let blockScopedVar = "I am a block-scoped variable";
    console.log(blockScopedVar); // Accessible here
    }
    console.log(blockScopedVar); // Error: blockScopedVar is not defined`

## pure Functions :)

* Pure functions are functions that always return the same result when given the same arguments.

* A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed .

* It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

* It does not produce any observable side effects such as modifying arguments or global variables, or performing I/O operations (like printing to the console or reading/writing to a file).

    `function add(a, b) {
        return a + b;
    }
    console.log(add(2, 3)); // Output: 5`

## Closures

* A closure is a function that remembers its outer variables and can access them. It is created when a function is declared inside another function. The inner function has access to the variables of the outer function, even after the outer function has finished executing. This allows the inner function to "remember" and use the variables from the outer function, even when it is called later.

    `function outerFunction() {
        var outerVar = "I am an outer variable";
        function innerFunction() {
            console.log(outerVar); // Accessing the outer variable
        }
        return innerFunction;
    }
    var myClosure = outerFunction();
    myClosure(); // Output: I am an outer variable`

## Hoisting

* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared.

    `console.log(myVariable); // Output: undefined
    var myVariable = 5;
    console.log(myVariable); // Output: 5`

* Note that only the declaration is hoisted, not the initialization. This means that if you try to access a variable before it has been initialized, it will be `undefined`.

## Lexical Scope

* Lexical scope is a concept in programming where the scope of a variable is determined by its location in the code. In other words, the scope of a variable is determined by the place where it is declared, not by where it is used.

    `function outerFunction() {
        var outerVar = "I am an outer variable";
        function innerFunction() {
            console.log(outerVar); // Accessing the outer variable
        }
        innerFunction();
    }
    outerFunction(); // Output: I am an outer variable`

## This Keyword

* The `this` keyword in JavaScript refers to the object that the current function is a method of. The value of `this` depends on how the function is called.

    `function myFunction() {
        console.log(this);

    }
    myFunction(); // Output: window object (in a browser)`

* In the example above, `this` refers to the global object, which is the window object in a browser. However, if the function is called as a method of an object, `this` will refer to that object.

    `var myObject = {
        name: "John",
        myFunction: function() {
            console.log(this.name); // Output: John
        }
    }
    myObject.myFunction();`
---

## Control flowe :

* Control flow is the order in which statements are executed in a program. In JavaScript, control flow is determined by statements such as `if`, `else`, `for`, `while`, 

* ## if Statments
   * The `if` statement is used to execute a block of code only if a specified condition is true.

    `var x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    }`

* ## else Statments
   * The `else` statement is used to execute a block of code if the condition in the `if` statement is false.

    `var x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    } else {
        console.log("x is less than or equal to 5");
    }`
* ## else if Statments
   * The `else if` statement is used to execute a block of code if the condition in the `if` statement is false, but the condition in the `else if` statement is true.

    `var x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    } else if (x < 5) {
        console.log("x is less than 5");
    } else {
        console.log("x is equal to 5");
    }`
* ## shorted if-else 
   * The ternary operator is a shorthand way of writing an `if-else` statement.

    `var x = 10;
    var result = (x > 5) ? "x is greater than 5" : "x is less than or equal to 5";
    console.log(result); // Output: x is greater than 5`
* ## switch Statments
   * The `switch` statement is used to execute different blocks of code based on different values of a variable.

    `var x = 2;
    switch (x) {
        case 1:
            console.log("x is 1");
            break;
        case 2:
            console.log("x is 2");
            break;
        case 3:
            console.log("x is 3");
            break;
        default:
            console.log("x is not 1, 2, or 3");
    }`

* ## truthy and falsy values:
    * In JavaScript, a truthy value is a value that is considered true when evaluated in a Boolean context. A falsy value is a value that is considered false when evaluated in a Boolean context.
     
    * Falsy values include: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.
    * Truthy values include: `true`, any non-zero number, any non-empty string, any object, and any array.
    * `if` statements and other control flow structures in JavaScript use these truthy and falsy values to determine whether to execute a block of code.

* ##  nullish coalescing operator :

    * The nullish coalescing operator (`??`) is a logical operator that returns the right-hand side operand when the left-hand side operand is `null` or `undefined`, and otherwise returns the left-hand side operand.

    `var x = null;
    var y = x ?? "default value";
    console.log(y); // Output: "default value"`
    * This operator is useful for providing default values for variables that may be `null` or `undefined`.

* ## Tenary opertor :
    * The ternary operator is a shorthand way of writing an `if-else` statement.

    `var x = 10;
    var result = (x > 5) ? "x is greater than 5" : "x is less than or equal to 5";
    console.log(result); // Output: x is greater than 5`
        