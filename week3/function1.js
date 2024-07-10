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
// console.log(multiplefun(12,23,45,43,21))// return the first ietms


//-------- -----Arrow function ------------------------------------------------------------------------------
// this keybord about the cuernt context 

const user={
    username:"nitin",
    price:999,
    welcome: function(){
        console.log(`${this.username} , welcome to the chat AI`)
        console.log(this)// return the object of context of user -> { username: 'nitin', price: 999, welcome: [Function: welcome] }

    }
}

// user.welcome()// return the : nitin , welcome to the chat AI
// user.username="Ram ji"
// user.welcome()/// return the : Ram ji , welcome to the chat AI

// user.welcome()

// console.log(this)// node envroiments  return emtpy object like this->{}

// function nk(){
//     console.log(this)
// }
// nk()

// function nk(){
//     let username='nitin  kmar'
//     console.log(this.username)// return undefined it is working only objects 
// }
// nk()


// const code=function(){
//     console.log("first type of declartions ")
//     let username='nitin  kmar'
//     console.log(this.username)// return undefined it is working only objects 
// }
// code()



// const code=()=>{
//     console.log("Arrow function  declartions ")
//     let username='nitin  kmar'
//     console.log(this.username)// return undefined it is working only objects 
// }
// code()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(42,22))


// const addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(42,22))


// ------------------Immediately invoked  function---------------------------------------------
 // ( ) ( )

//  (function(a, b) {
//     console.log(a + b);
// })(5, 10); // Outputs: 15







