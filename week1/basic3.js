// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    Basic    OPERTIONS                                             //
//====================================================================================================
let s1="hello"
let s2=" nitin"
let s3=s1+s2
console.log(s3)// concat to string ==> hello nitin


console.log("1"+2);// retrun 12
console.log(1+"2");// retrun 12
console.log("1"+2+22);//retrun 1222
console.log(1+2+"22");//return 322
/*
JavaScript ===> type coercion==>Automatic or implicit conversion of values from one data type to another (such as strings to numbers and vice versa) during operations.
1.Concatenation with Strings:
                        When a string is involved in an operation with another type (like a number), JavaScript will coerce the other type to a string and then perform string concatenation.
                        Example: "1" + 2 results in "12".
2.Order of Operations:
                    * JavaScript evaluates expressions from left to right.
                    * If the first operation involves a string, subsequent operations will follow the string concatenation rule.
                    Example: "1" + 2 + 22 results in "1222" because "1" + 2 is evaluated first to "12", and then "12" + 22 is evaluated to "1222".
                    * When only numbers are involved before a string is encountered, JavaScript performs the arithmetic operations first.
                    Example: 1 + 2 + "22" results in "322" because 1 + 2 is evaluated first to 3, and then 3 + "22" is evaluated to "322"
    
*/


console.log(true)// Retrun =>true
console.log(+true)//Retrun =>1
console.log(+"")//Return =>0
/*
Type Coercion:The unary + operator explicitly attempts to convert its operand to a number.
* JavaScript, true is converted to 1 and false is converted to 0 (when using the unary + operator).
* An empty string "" is converted to 0 when using the unary + operator because the numeric value of an empty string is 0.
*/




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                    comparison of datatypes                                //
// ===========================================================================================
console.log(2>1)// retrun true
console.log(2>=1)// retrun true
console.log(2<1)// retrun flase
console.log(2<=1)// return false
console.log(2==1)// retrun flase
console.log(2!=1)// return flase 


console.log("2">1)
console.log("02">1)

console.log('null:',null>0)//null: false
console.log('null:',null>=0)//null: true
console.log('null:',null<0)//null: flase
console.log('null:',null<=0)// null: true
console.log('null:',null==0)// null: false


console.log('undefined:',undefined==0)// undefined: false
console.log('undefined:',undefined>0)// undefined: false
console.log('undefined:',undefined>=0)// undefined: false
console.log('undefined:',undefined<0)// undefined: false
console.log('undefined:',undefined<=0)// undefined: false



// === -> strickly equal to it is check value and data types
console.log("2"===2)// Return flase





