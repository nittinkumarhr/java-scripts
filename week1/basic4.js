// =================================================
//                    data summary summary               //
// =================================================


/*
Type	 TypeofReturnValue	    ObjectWrapper
Null	    "object"	          N/A
Undefined	"undefined"	          N/A
Boolean	    "boolean"	        Boolean
Number	    "number"	        Number
BigInt	    "bigint"	        BigInt
String	    "string"	        String
Symbol	    "symbol"	        Symbol
*/
let num = 42; //Represents both integer and floating-point numbers
let str = 'hello'; // Represents a sequence of characters.
let bool = true; // Represents a logical value: true or false.
let undef; //  Represents a variable that has been declared but not assigned a value.
let n = null; // Represents the intentional absence of any object value.
let sym = Symbol('id'); // Represents a unique and immutable identifier.
let bigInt = 1234567890123456789012345678901234567890n; // Represents integers with arbitrary precision.

console.log(num)
console.log(str)
console.log(bool)
console.log(undef)
console.log(n)
console.log(sym)
console.log(bigInt)



//=============================Reference Data Types (Objects)=====================

const heros=['shri davan','Basic curese','geeta ji']
let myobj={
    'name':'nitin',
    'pass-out':[{'class 10':'65','class 12':'60','computer science':'75'}],
    'status':'unmarid'
}
const myfun=function(){
    console.log("hello fun")

}


console.log(heros)
console.log(myobj)

myfun()