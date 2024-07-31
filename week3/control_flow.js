//  ----------------------------------------------------------------------------------------------------------------------
//  Control Flow
//  ----------------------------------------------------------------------------------------------------------------------


// // ------------------if statement------------------------------------------
if (true) {
    console.log("This will print if the condition is true");    
}
//flase -code will not run inside the if statement
if (false) {
    console.log("This will not print if the condition is false");
}

if (2=="2"){
    
    console.log("This will print if the condition is true 2=='2'");
}
if (2===2){
    
    console.log("This will print if the condition is false 2===2");
}

const isUserLoggedIn = true;
const temperature = 42;
if (temperature<50) {
    console.log("It's cold outside");
}

//------------------------------- if-else ------------------------------
if (temperature<40) {
    console.log("It's cold outside")
}
else {
    console.log("It's warm outside")
}


// // -----------------shorted if-----------------------------------
// const blance = 52;
if (blance<50)  console.log("blance is less than "),console.log("blance 50");
// shorted else
else console.log("blance is greater than 50");


// -----------------------------------if-else else-if--------------------------------------------------
// const blance = 52;

if (blance<20){
    console.log("blance is less than 20");
}
else if (blance<40) {
    console.log("blance is grater than 40");   console.log("emptyobject is empty");
}

else {
    console.log("blance is greater than 50");
}


// // ------------------------ and operator -&& , or operator - || , not operator - ! ------------------------------------------------------------ 
// const blance = 52;
if (blance<20 && blance>10){
    console.log("blance is less than 20 and greater than 10");
}
else if (blance<40 || blance>50) {
    console.log("blance is grater than 40 or less than 50");
}
else {
    console.log("blance is greater than 50");
}


// // -----------------switch statement--------------------------------------------------------------------
const day = "tuesday";
switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
}

// --------------------truthy and falsy values-----------------------------------------------------

//  falsy values - 0, -0, "", null, undefined, NaN, false, bigint(0n)
// truthy values - any value that is not falsy-: "0",'flase',' ',[],{},functions (){}, etc.

const blance = 0;
if (blance) {
    console.log("blance is not zero");
}
else {
    console.log("blance is zero");
}

const emptyobject = {};
if (Object.keys(emptyobject).length==0) {
    console.log("emptyobject is not empty");
}
else {
    console.log("emptyobject is empty");
}


if (false==0){
    console.log("return true");
}
else{
       console.log("return false");
}
// false =='' return - true
// false ==0 return - true
// false ==null return - true
// false ==undefined return - true
// false ==NaN return - true
// 0 ==""  retrun  - true
// 0 ==null return - true
// 0 ==undefined return - true
// 0 ==NaN return - true
// "" ==null return - true


//------------------------- nullish coalescing operator - ??=----------------------------------------------------------------------
// nullish coalescing operator - ?? - returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.

let val1;
val1=5 ??10
val1=null ?? 10
val1=undefined ?? 3
val1= null ?? 10 ?? 20 ;
console.log(val1);// return the  -5 

// ---------------------------------------tenary opertor----------------------------------------------- 
// condition ? expr1 : expr2
// if condition is true then expr1 will be executed otherwise expr2 will be executed


let x = 10;
let y = 20;
// let z = x > y ? "x is greater than y" : "x is not greater than y";
console.log(z);

