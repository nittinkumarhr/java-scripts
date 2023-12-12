/*NOTE -  varibles and constant 
*/
score=0
live=2
// hoistring:=> varibles bana sa pahala isako use ker sakta ha
// varibales and function are hoisted which means thir decleartion is moved on the topof the 
var a; 
console.log(a)
a=12;
/*NOTE - ================================================================================================*/
// Undefined and not defined 

// console.log(b);//#endregion :=> b is not defined
let c;
console.log(c)//#endregion :=>undefined

/*NOTE - conditional operations  if else  else-if */

if ("apple"){
    console.log('nitin')
}
//   this if condition is working output  =>nitin

if (11>12){
    console.log('1')
}
else if(112>11){
    console.log('2')

}
else if(34<11){
 console.log('3')
}
/*NOTE -=============================================  Loops=====================================*/
//  for 
//  while 

for (i=1;i<5;i++){
    console.log(i)
}

// while loop
let a1=12;
while (a1<20){
    console.log(a)
    a++;

}


/*NOTE ================================================  function==========================*/

function helllo(){
    console.log('nitin kumar')
}
helllo();
/*NOTE ======================================================== difference between var  let const  ==============================*/
// var old  js meain tha
// var function scoped hota hai => var apana apna parent function ma kahi per bhi use ho sakta ha 
//  var adds itself to the windows object => kuch items Js provide nhi kerta ha usako kisi or sa lana pata jasa windows object(alert, consloe,peromt,etc) jo ki window  ha  ek box of feature given by Browser...

// var is not stquare 
var a =10;//NOTE -  print the varible a data in consloe log  it is windows 
function abc(){//#endregion - parent function Scope 
    for (var i=0;i<10;i++){ 
        console.log(i)
    }
    console.log(`agter loop finish ${i}`)
}
abc();


//SECTION - +============+Let Variables ===========================================
// Let/const New JS Version  tha 
// Let/const Braces scoped hota ha  

function abc2(){
    for (let i=0;i<10;i++){ 
        console.log(i)
    }
    console.log(`agter loop finish ${i}`)//NOTE -  when print the loop after come this console  threow error 
}
abc2();


//  -================================= Execution context ==========================
/*!SECTION => jab bhi hum function chalaayega function apna  ek khudka ek imaginary container bana lata ha jismein uski 3 cheeje hogi 
1. variables
2.function inside that parent function
3.lexical environment of that function => ya bata ha ki kiya ascess kiya jasakta ha or kiya nhi in function 
 
Imaginary container ko hi Execution context khata ha */
//NOTE -  How to copey Reference values 
var a=[1,2,3,4,5]
var b=[...a];
b.pop()
console.log(b)
console.log(a)
//b=[ 1, 2, 3, 4 ] , a= [ 1, 2, 3, 4, 5 ]
/*NOTE - Truthy and falsy=> Js mein kuchh bhi likho  wo manly do prakaar mein se kisi ek prakaar sa belong kerti ha 
1.Truthy
2. falsy  => falsy values(0,false,undefined,null,NaN,document.all)*/
if (7){
    console.log("7 is truthy")
}
else
    console.log("7 is falsy")
if (0)  
console.log("0 is truthy")
else
    console.log("0 is falsy")
//NOTE -===========================Call back function===============================================
setTimeout(function(){ 
    console.log("Hello")
},1000)

//NOTE -==========================First class function===============================================
// function ko use ker sakta ha  as a value 
var a=function(){
    console.log("first class function")
}
console.log(a)
a()
// second
function abc(a){

}
abc(function(){
    console.log("second class function");})

//NOTE -===========================Higher order function ===============================================
//@ts-check => Asa function jo accept ker ka ek or function ya return ker da ek or function 

function mysdc(c){
    return c
}

function add(a,b){
    return a+b
}
console.log(mysdc(add(1,34)))

