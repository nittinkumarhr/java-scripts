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


## Closures :
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
