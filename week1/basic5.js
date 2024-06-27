// ===================================================================================
//                                      Memory Management                           //
//====================================================================================
/*
JavaScript has an automatic memory management system, primarily utilizing garbage collection to reclaim memory that is no longer in use.
Primitive Types (number, string, boolean, null, undefined, symbol, bigint)=>:stack is used for static memory allocation, such as primitive types and function calls. 
Reference Types (array, function, object):heap is used for dynamic memory allocation, such as objects, arrays, and functions. 
*/

let v1="hello nitin"
let v2=v1
console.log(v2)// hello nitin
console.log(v1)// hello nitin


v2="kumar"
console.log(v2)// kumar
console.log(v1)// hello nitin
/* This changes only v2. The value of v1 remains unchanged because v1 and v2 are independent copies of the string.

Primitive Values: 
                In JavaScript, primitive values (such as strings, numbers, booleans, etc.) are copied by value. 
                This means that when you assign one variable to another varible, a new copy of the value is created. 
                Changes to one variable do not affect the other.
Independent Copies: v1 and v2 are independent copies of the string value. Changing v2 does not change v1.  */


let d1={
    'name':'nitin',
    'email':'nitin@gmail.com'
}
let d2=d1

console.log(d1)// output : { name: 'nitin', email: 'nitin@gmail.com' }
console.log(d2)// output : { name: 'nitin', email: 'nitin@gmail.com' }


d2.email='nitin2@gmail.com'
console.log(d1)// output :  {name: 'nitin', email: 'nitin2@gmail.com' }
console.log(d2)// output : { name: 'nitin', email: 'nitin2@gmail.com' }
/*
Since d1 and d2 refer to the same object, this change is reflected in both d1 and d2.

Objects by Reference: In JavaScript, objects are assigned and copied by reference, not by value.
Shared Reference: Both d1 and d2 refer to the same object in memory. Changing the object via one reference affects  the boths.

*/






