// Day: 1 Varibles  and Data Types 

// Activity :1 Varibles Declaration
var num=34
let str="nitin kumar"

console.log(num,' ',str);// output : 34   nitin kumar

// Activity :2 constant Declartions
const bool= true
console.log(bool);// output :true

// Activity :3 Data Types
let nusm=23
let st2r="nitin"
const b=true
let obj={
    id:1,
    name:'Nitin',
    clss:'no'
}
let arr=[1,2,3,4,5,'f','ffvvfv']
console.log("Type :",typeof(nusm),"Type :",typeof(arr),"Type :",typeof(b),"Type :",typeof(st2r),"Type :",typeof(obj));//Type : number Type : object Type : boolean Type : string Type : object

// Activity :4 and 5.Reassigning varibles 
let a='nitin'
a='nitin 2 kumar'
console.log(a)// Output : nitin 2 kumar
const second=13
second=11
console.log(second)// output : TypeError: Assignment to constant variable.