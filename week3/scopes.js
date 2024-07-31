var a=120
let b=40

if (true){
    var a=23
    let b=4

}

console.log("Outer varibles  var :",a)// return 23 
console.log("Outer varibles  Let :",b)// return 40  this is scope varible not a function varibles 


//----------------------------------------------------------
//nested function scopes
function one(){
    const username ="nitin"
    function two(){
        const laptop='Dell'
        console.log(username," ",laptop)
    }
    two()
    // console.log(laptop," 7480")// return -> error beause laptp is scope vaible

}
one() 
// console.log(username)//return -> error beause laptp is scope vaible


// console.log("add :",num(5)) // return the 6  before declartion use vaibles 
function num(n){
    return n+1
}

// console.log(vars(10)) // given the error ->Cannot access 'vars' before initialization
const vars=function(nk){
    return nk+1

}

