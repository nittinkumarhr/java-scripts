//NOTE - +========++++++++++++==============Array is collection of multiple data types========================================>
const MyArr=[1,2,3,4,5,6,7,8,9,10]// first way to declare the array

// console.log(MyArr[1])

// const MyArr2 =new Array(1,2,3,4,5,6,7,8,9,10)// sECOND WAY TO dEclear the array 

// console.log(MyArr2[0])
// //NOTE -<===================================METHOD In ArrAy=============================================>

// MyArr.push(67)// add the values in arrau
// console.log(MyArr)


// MyArr.pop()// remove the last elements in the aary
// console.log(MyArr)

// MyArr.unshift(3)// add the elements in the starting  end 
// console.log(MyArr)

// MyArr.shift() // delete the unshift elements in the array 
// console.log(MyArr)

// console.log(MyArr.includes(10))// return the true if 10 is exiting  in  array

// console.log(MyArr.indexOf(10))// return the index number given  elements if no exiting the elements given the *-1*



// const newArr=MyArr.join()//!SECTION join array convert into string
// console.log(typeof newArr +newArr)
// console.log(typeof MyArr+MyArr)


//NOTE -=====<Slice VS Splice ====>
console.log("A :"+MyArr)
console.log(MyArr.slice(1,4))//!SECTION =>
console.log("B :"+MyArr)
console.log(MyArr.splice(1,4))//!SECTION original ka duplicate bana data or main array sa elements delete ker data ha 
console.log("C :"+MyArr)
