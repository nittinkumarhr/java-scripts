# ----------Week 2----------------------------------------------------------

## Array  :)

* An array in JavaScript is a data structure used to store multiple values in a single variable.

* It can hold various data types and allows for dynamic resizing.

* Elements are accessed by their index, starting from 0

* Arrays are flexible in size, so they can grow or shrink as you.

## Declaration of an Array :)

* here are basically **two ways** to declare an array i.e.
**Array Literal and Array Constructor**.

### Array Literal :)

* Creating an array using array literal involves using square brackets [] to define and initialize the array.

`let arrayName = [value1, value2, ...];`

### Array Constructor :)

* The “Array Constructor” refers to a method of creating arrays by invoking the Array constructor function.

`let arrayName = new Array();`

**Note: Both the above methods do exactly the same. Use the array literal method for efficiency, readability, and speed.**

## Array Methods :)

* **length :** The array length property in JavaScript is used to set or return the number of elements in an array.

* **toString() :**  returns a string with array values separated by commas. No any  changes   original array

* **Join() :** This Method is used to join the elements of an array into a string.

* **indexOf() :** method returns the position of the first occurrence of a value in a string. If the value is not found, it returns -1.

* **push() :** This method in JavaScript adds one or more elements to the end of an array. it modifies the original array by appending the new elements.

* **pop() :** The pop() method removes (pops) the last element of an array. The pop() method changes the original array.

* **shift() :** This  Method removes the first element of the array thus reducing the size of the original array by 1.

* **unshift():** THis Method is used to add one or more elements to the beginning of the given array.

* **slice() :** This method returns selected elements in an array as a new array. It selects from a given start, up to a (not inclusive) given end. This method does not change the original array.

* **splice() :**  JavaScript that is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array of the removed elements.

    `array.splice(start, deleteCount, item1, item2, …);`

* **includes() :** This method returns true if an array contains a specified value. Conversely, it returns false if the value is not found.

* **concat() :** This method concatenates (joins) two or more arrays. It returns a new array, containing the joined arrays. This method is useful for combining arrays without modifying the originals.

* **from() :**  THis method returns an Array object from any object

* **isArray() :**        method in JavaScript is used to determine whether a given value is an array or not. This method returns true if the argument passed is an array else it returns false.

* **Array of() :**  Inbuilt method in JavaScript that creates a new array instance with variables present as the argument of the method.

* **Array at() :** THis method takes an integer value (index) as a parameter and returns the element of that index. It allows positive and negative integers.

* **Array flat()  :** THis method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, it defaults to 1.

**More about the  Array**   [click](https://www.geeksforgeeks.org/javascript-array-map-method/?ref=lbp)

---

## *Objects*

* objects are like containers that can hold multiple values at once

* Data store in key and value format

### Creating Objects

* Objects can be created using two different methodologies namely Literal Form and Constructed Form.

1. ### Literal Form

         let obj = {
                key1: value1,
                key2: value2,
                ...
            };

2. ###  Constructed Form / singleton  objects

         let obj = new Object();
            obj.key1 = value1;
            obj.key2 = value2;

## Differences between using Object Literals and the Constructed Form

* Both the constructed form and literal form result in creating exactly the same sort of object i.e. the end result is the same for both methodologies.

### Methods of an objects :)

* **assign() :** method is used to copy the values and properties from one or more source objects to a target object.

    `let obj1 = { a: 10 };
    let obj2 = { b: 20 };
    let obj3 = { c: 30 };
    // Creating a target object and copying values
    // and properties to it using object.assign() method
    let new_obj = Object.assign({}, obj1, obj2, obj3);`
* **entries() :** method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter.

    `// Creating an object constructor
// and assigning values to it
const obj = { 0: 'adam', 1: 'billy', 2: 'chris' }; 
// Displaying the enumerable property [key, value]
// pairs of the object using object.entries() method
console.log(Object.entries(obj)[1]);`

* **freeze()  :**  method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties.

    `const obj1 = { property1: 'initial_data' }; 
// creating a second object which will freeze 
// the properties of the first object 
const obj2 = Object.freeze(obj1); 
// Updating the properties of the frozen object 
obj2.property1 = 'new_data'; 
// Displaying the properties of the  frozen object  
console.log(obj2.property1);`

* **hasOwn() :** method is used to check if the object has the specified property or not. It returns true if the property exists else false. This method was introduced as a replacement for the Object.hasOwnProperty() method. 

    `let details = { 
    name: "Raj", 
    course: "DSA", 
    website: "geeksforgeeks.org", 
} 
console.log(Object.hasOwn(details, 'name')); 
console.log(Object.hasOwn(details, 'course')); 
console.log(Object.hasOwn(details, 'phone number'));`

* **is() :** method is used to compare if two values are the same value.

    `console.log(Object.is(5, 5)); // true
console.log(Object.is(5, '5')); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false`


### more about Objects  [*Click here*](https://www.geeksforgeeks.org/javascript-object-values-method/?ref=lbp)
