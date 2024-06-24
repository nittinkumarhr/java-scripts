/*NOTE -  Premitive => 7 (call by value )
String , number ,Boolean,null ,undfinded,symbol(make a vlue uniqe),bigint(scintfice values )*/
const score=100
const scoreValue= 200.2
const islogin =true
const name =null
const id =Symbol('123')

const id2 =Symbol('123')
console.log(id ===id2)//#endregion => false 


const bignumber =22222222222224n //#endregion  endregion - (n)repersent big int  

/*NOTE -  NOn premitive =>3

Arrray ,object , function*/

const Arrray_1= ["hello",'nitin','kumar']

const myobj ={
    name:'nitin',
    age :'13'
}


const fun =function(){
    console.log('hello world')
}

/*NOTE - 
typeof function resuls
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



/*NOTE - memory  in js 
1.stack(premitive type) =>  copey 
2. heap(non premitive type) =>  Refernce */

let name1='nitin'
let name2 =name1
console.log(name2)
console.log(name1)
// same out copey create 
name2 ="mohan"
console.log(name2)//#endregion :=> mohan
console.log(name1)//#endregion :=> nitin

