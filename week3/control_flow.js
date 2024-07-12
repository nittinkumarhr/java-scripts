//  ----------------------------------------------------------------------------------------------------------------------
//  Control Flow
//  ----------------------------------------------------------------------------------------------------------------------


// // if statement
// if (true) {
//     console.log("This will print if the condition is true");    
// }
// //flase -code will not run inside the if statement
// if (false) {
//     console.log("This will not print if the condition is false");
// }

// if (2=="2"){
    
//     console.log("This will print if the condition is true 2=='2'");
// }
// if (2===2){
    
//     console.log("This will print if the condition is false 2===2");
// }

// const isUserLoggedIn = true;
// const temperature = 42;
// if (temperature<50) {
//     console.log("It's cold outside");
// }

// // if-else 
// if (temperature<40) {
//     console.log("It's cold outside")
// }
// else {
//     console.log("It's warm outside")
// }


// // shorted if
// const blance = 52;
// if (blance<50)  console.log("blance is less than "),console.log("blance 50");
// // shorted else
// else console.log("blance is greater than 50");


// // // if-else else-if
// const blance = 52;
// if (blance<20){
//     console.log("blance is less than 20");
// }
// else if (blance<40) {
//     console.log("blance is grater than 40");
// }
// else {
//     console.log("blance is greater than 50");
// }


// //  and operator -&& , or operator - || , not operator - !  
// const blance = 52;
// if (blance<20 && blance>10){
//     console.log("blance is less than 20 and greater than 10");
// }
// else if (blance<40 || blance>50) {
//     console.log("blance is grater than 40 or less than 50");
// }
// else {
//     console.log("blance is greater than 50");
// }


// switch statement
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