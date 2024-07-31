// //NOTE -Object Declare kerna ka two way 
// // 1. litreal
// // 2. constructor
// //NOTE -  singleton => koi bhi objcet jo constructor sa banata ha , bo singleton sa objcet banta ha 

// //!SECTION Object literials

// const obj = {}// litreal method 

// Object.create // constructor method 

// //NOTE - <======================litreal method=============================================================>


// const obj2= {
//     name : "nitin",
//     "Ability" : "developer",
//     Age : 20,
//     loction : "Delhi",
//     email : "nitin@gmail.com",
//     lastname : "kumar"
// }
// //@ts-check  TODO - 
// console.log(obj2.name);
// console.log(obj2['Age'])
// //!SECTION
// console.log(obj2.Ability);
// console.log(obj2['Ability']);

// /*NOTE -  how to print symbol in object */
// const mysmb=Symbol('99999')
// const obj3 = {
//     'name': 'nitin',
//     'age': 20,
//     'lastname': 'kumar',
//     'email': 'nitin@gmail.com',
//     'location': 'Delhi',
//     [mysmb]: '99999'
// }
// console.log('Smbol output : '+obj3[mysmb]);

// //NOTE - update the values
// obj3.name = 'nitin1'
// console.log(obj3.name);
// //NOTE - louck the object

// Object.freeze(obj3);
// obj3.name = 'nitin kumar'
// console.log(obj3.name);

//NOTE -  =======================Second video 2----------------------------------------------------------------------

const inderuser = new Object() ; //NOTE -  Single tern object

const nonos ={}; // => Non   single Object 

//NOTE -======================== Add the multiple object in a object===================================================
const ob1 = {
    a:'a',
    b:'b',
    c:'c',
    d:'d'}
const ob2 = {
    e:'e',
    f:'f',
    g:'g',
    h:'h'}
const ob3 = {...ob1, ...ob2}
console.log(ob3);
