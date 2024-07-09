//==========================================================================================================
//                                            Functions                                                   //
// ========================================================================================================

function hellfun(){
    console.log("Nitin kumar")
}
// hellfun//return the  nothing => this is function refernce 
// hellfun()// function the call



function addsum(num1, num2){
    return num1+num2
}
// console.log(`Result 1 :${addsum()}`) // return : Nan
// console.log(`Result 2 :${addsum(3,4)}`) // return : 7
// console.log(`Result 3 :${addsum(3,'4')}`) // return : 34
// console.log(`Result 4 :${addsum(3,'a')}`) // return : 3a
// console.log(`Result 5 :${addsum(3,null)}`) // return : 3



// how to pass multiple values in one varibles useing ->rest opertor (return the array)

// function multiplefun(num){
//     return num
// }
// console.log(multiplefun(12,23,45,43,21))// return the first itms

function multiplefun(...num){
    return num
}
console.log(multiplefun(12,23,45,43,21))// return the first ietms

