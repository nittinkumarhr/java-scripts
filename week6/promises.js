// //  Promise -> it is an Object representing the eventual completion or failure of an asynchronous operation and its resulting value.
// const promiseeOne =new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("Async Task is complete ");
//         resolve()
//     },1900)
// })

// promiseeOne.then(function(){
//     console.log("Promise is consumed    ")
// })

// // ---------------------------------------------------------------
// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("Async Task is complete ");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Promise is consumed    ")
// })

// //------------------------------------------------------------------------
// const PromiseTwo=new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve({username:"nitin",email:"nitin@gmail.com"})
// },2000)
// }).then(function(user){
// console.log(user)
// })
// ------------------------------------------------------------------------
const PromiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error= true
        if(error){
            resolve({username:"nitin",email:"nitin@gmail.com"})
        }
        else{
            reject("Error occurred")
        }
        }
    ,2000)
})

PromiseThree.then(function(user){
    console.log (user.username,user.email)
}).catch(function(){
    console.log("Error occurred")
})
