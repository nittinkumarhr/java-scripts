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
    console.log(blockScopedVar); // Error: blockScopedVar is not defined `


        
