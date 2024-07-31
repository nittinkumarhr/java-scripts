//=================================================================================================
//                                       String                                                  //
//immutable=>:once a string is created, it cannot be changed.Any operation that appears to modify a string actually creates a new string.                           
//========+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let str1 = "Hello, World!";//Using double quotes:
let str2 = 'Hello, World! 2';//Using single quotes
let str3 = `Hello, World! 3`;//Using backticks (template literals):


console.log(str1.length);// return the length of string =13

//You can access individual characters in a string using bracket notation.
console.log(str1[2])

// charAt(index): Returns the character at the specified index.
console.log(str2.charAt(4))

//indexOf(substring): Returns the index of the first occurrence of the specified substring, or -1 if not found.
console.log(str1.indexOf('hello'))// if first latter no match to string return " -1 "
console.log(str1.indexOf('nitin'))// if complete string  no match to string return " -1 "
console.log(str1.indexOf('World'))// return the first charcter index of substring 


// slice(start, end): Extracts a section of a string and returns it as a new string.
console.log(str2.slice(1,5))
console.log('slice:',str3.slice(-6,5))

//substring(start, end): Similar to slice, but does not accept negative indices
console.log('substring:',str1.substring(7, 12));//  return the : world


// substr(start, length): Extracts a substring starting from the start index and extending for a given number of characters (length).
console.log('substr:1',str1.substr(7,12))
console.log('substr:2',str1.substr(-6,5))


//toUpperCase(): Converts the entire string to uppercase.
console.log(str1.toUpperCase())

//toLowerCase(): Converts the entire string to lowercase.
console.log(str3.toLowerCase()); 

//replace(substring, newSubstring): Replaces the first occurrence of a substring with a new substring.
console.log(str2.replace('World! 2','nitin kumar'))
console.log(str3.replace('world! 3','nitin kumar'))// if substring first charcter no match given string  no replae new string 
console.log(str1.replace('WORLD!','nitin kumar'))


//split(separator): Splits the string into an array of substrings based on the specified separator.
let arr = str1.split(", ");
console.log(arr);

//trim(): Removes whitespace from both ends of a string.
let str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"



//Template Literals:Template literals provide a way to create strings with embedded expressions, which can be more readable than string concatenation. They are created using backticks (`).
console.log(` this is frst ${str1} and second string ${str2}`)



/*
Summary:
    1.Strings are immutable: Once created, they cannot be changed.
    2.Three ways to create strings: Using double quotes, single quotes, or backticks.
    3.Many useful methods: For manipulation, searching, and formatting strings.
    4.Template literals: Offer a convenient way to create strings with embedded expressions and multi-line strings.
*/

