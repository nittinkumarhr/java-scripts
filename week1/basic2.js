// ===================================================================================================
//                          TYPE CONVERSTION                                                        //
//====================================================================================================

//----------------------------- number convertion-----------------------------------------------------

let scroe=33
console.log(typeof scroe) // return varible type =>Number

let name2="44"
console.log(typeof(name2))// return varible type =>String
let valueInNumber=Number(name2)
console.log(typeof (valueInNumber)) // return the varible type => Number 

let nam2='334dd'
let convert=Number(nam2)
// if charcter string convert into number  posible but varibles retrun NaN
console.log(convert,typeof(convert))//NaN ,number

let name3=null
let con=Number(name3)
console.log(con,typeof(con))// 0 number ==> return the 0 but type number

let namew=undefined
let con1=Number(namew)
console.log(con1,typeof(con1))// NaN number ==> return the NAN but type number


// some notes points

// "33"==>33
// "33abc"==>NaN
// true ==> 1 and flase ==> 0

//----------------------------------boolean convertion--------------------------------------------------
let bol1 = "1"
let con2=Boolean(bol1)
console.log(con2,typeof(con2))//true boolean==> return true and type boolean and  if bol1= "" ==>false boolean


let bol2 = 1
let con3=Boolean(bol2)
console.log(con2,typeof(con3))//true boolean==> return true and type boolean and if blo2=0 retrun flase and type boolean 


let bol3 = 1
let con4=Boolean(bol3)
console.log(con4,typeof(con4))//true boolean==> return true and type boolean 


// 1 ==> TRUE 0 ==> FLASE
// "" ==> flase
// "nitin"==> true

// ---------------------------------------STRING CONVERTIONS-----------------------------------------------------
let somenumber=223
let convt=String(somenumber)
console.log(convt,typeof(convt))//223 string return the number and convert into string 


