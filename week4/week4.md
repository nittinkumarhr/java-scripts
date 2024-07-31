# --------------------------------Week4------------------------------------------------

## Loops:)

* - Loops are used to repeat a block of code  until a specific condition is met.
* - There are three types of loops in Python: for loop, while loop, and nested loop.
* - For loop is used when we know the number of iterations in advance.
* - While loop is used when we don't know the number of iterations in advance.
* - Nested loop is used when we want to repeat a block of code inside another block of code.
* - Break statement is used to exit the loop prematurely.

## Do while

* - Do while loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true.
* - The syntax of do while loop is as follows:

```
do {
    // code block to be executed
} while (condition);
```

* - In this syntax, the code block is executed first, and then the condition is checked. If the condition is true, the code block is executed again. If the condition is false, the loop is terminated.

## whille

* - While loop is a control flow statement that executes a block of code as long as a specified condition is true.
* - The syntax of while loop is as follows:

```
while (condition) {
    // code block to be executed
}
```

* - In this syntax, the condition is checked first. If the condition is true, the code block is executed. If the condition is false, the loop is terminated.

## for

* - For loop is a control flow statement that allows code to be executed repeatedly based on a counter or an iterable object.
* - The syntax of for loop is as follows:

```
for (initialization; condition; increment) {
    // code block to be executed
}
```

* - In this syntax, the initialization is executed once before the loop starts. The condition is checked before each iteration of the loop. If the condition is true, the code block is executed. The increment is executed after each iteration of the loop.

## Nested Loop

* - Nested loop is a loop inside another loop.
* - The syntax of nested loop is as follows:

```
for (initialization; condition; increment) {
    // code block to be executed
    for (initialization; condition; increment) {
        // code block to be executed
    }
}
```

* - In this syntax, the outer loop is executed first. For each iteration of the outer loop, the inner loop is executed.

## Break

* - Break statement is used to exit the loop prematurely.
* - The syntax of break statement is as follows:

```
for (initialization; condition; increment) {
    // code block to be executed
    if (condition) {
        break;
    }
}
```

* - In this syntax, the code block is executed until the condition is met. If the condition is met, the break statement is executed, and the loop is terminated.

## Continue

* - Continue statement is used to skip the current iteration of the loop and continue with the next iteration.
* - The syntax of continue statement is as follows:

```
for (initialization; condition; increment) {
    // code block to be executed
    if (condition) {
        continue;
    }
}
```

* - In this syntax, the code block is executed until the condition is met. If the condition is met, the continue statement is executed, and the current iteration is skipped.

## For in loop

* - For in loop is used to iterate over the properties of an object.
* - The syntax of for in loop is as follows:

```
for (variable in object) {
    // code block to be executed
}
```

* - In this syntax, the variable is assigned the name of each property of the object, and the code block is executed for each property.

## For of loop

* - For of loop is used to iterate over the values of an iterable object.
* - The syntax of for of loop is as follows:

```
for (variable of iterable) {
    // code block to be executed
}
```

* - In this syntax, the variable is assigned the value of each element of the iterable, and the code block is executed for each element.

## Map 
* - Map is a collection of key-value pairs.
* - The syntax of Map is as follows:

```
let map = new Map();
```

* - In this syntax, a new Map object is created.

## Filter
* - Filter is a method that creates a new array with all elements that pass the test implemented by the provided function.
* - The syntax of filter is as follows:

```
let newArray = array.filter(function(currentValue, index, arr), thisValue);
```

* - In this syntax, the function is executed for each element of the array, and the elements that pass the test are added to the new array.

* - The function takes three parameters:
    * - currentValue: The current element being processed in the array.
    * - index (optional): The index of the current element being processed in the array.
    * - arr (optional): The array filter was called upon.
* - The thisValue parameter is optional and can be used to specify the value of this inside the function.

## Reduce
* - Reduce is a method that executes a reducer function on each element of the array, resulting in a single output value.
* - The syntax of reduce is as follows:

```
let accumulator = array.reduce(function(accumulator, currentValue, index, arr), initialValue);
```

* - In this syntax, the function is executed for each element of the array, and the result is accumulated in the accumulator variable.
* - The function takes four parameters:
* - accumulator: The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
* - currentValue: The current element being processed in the array.
* - index (optional): The index of the current element being processed in the array.
* - arr (optional): The array reduce was called upon.
* - initialValue (optional): A value to use as the first argument to the first call of the callback.
* - The initialValue parameter is optional and can be used to specify the initial value of the accumulator.
If initialValue is not provided, the first element in the array will be used as the initial value, and the reduce function will start processing from the second element.

* - The reduce function returns the final accumulated value.
