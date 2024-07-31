-0//// Day -:6 Arrays
// Aactivity 1 :-Arrays accessing and declaration
// Task 1 : create of number form 1 to 5 
let arr=[1,2,3,4,5] 
console.log(arr)

// Task:2 - Accessing the array first element and last element
console.log(arr[0])
console.log(arr[arr.length-1])

// Activity 2 :-Arrays Methods

// Task 1: Use the push method to add an element to the end of the array
let arr2=[1,2,3,4,5,6]
arr2.push(7)
console.log('push :',arr2)

// Task 2 : Use the pop method to remove an element to the end of the array
arr2.pop()
console.log("POP :",arr2)

// Task 3: Use the shfit method to remove an element to the first  of the array
arr2.shift()
console.log('shift :',arr2)

// Task :4 Use the unshfit method to add an element to the first of the array
arr2.unshift("unshfit")
console.log("unshift",arr2)

// Activity 2 :-Arrays Methods -map,fillter,reduce
//Task :1 Use the map method to create a new array where each numbers is doubled and log the new array.
let arr3=[1,2,3,4,5,6,7]
let newarr1=arr3.map((num)=>(num*2))
console.log('Map :',newarr1);

// Task : 2 Use the Fillter method  to create a new array with only even numbers and log each elements 
let newarr2=arr3.filter((nums)=>(nums%2==0))
console.log('Filters :',newarr2)

//Task :3 Use the reduce method to calculate the sum of all numbers in the array

let newarr3=arr3.reduce((acc,nums)=>{
    return acc +nums
},0)
console.log("Reduce : ",newarr3)

//  Activity 4 : Array Itertion 
// Task : 1 Use a for loop to iterate over the array and log each elements to the consloe.
let arr4=[1,2,3,4,5,6,7]
for(let i=0; i<arr4.length;i++){
    console.log('for loop iterate : ',arr4[i])
}
// Task : 2 Use a for each  method  to iterate over the array and log each elements to the consloe.
let new_arry=arr4.forEach((nums)=>{
  console.log('for each :',nums)
})

//  Activity 5 : Multi-dimensional Array
// Task 1: create multi-dimensional array and log the console
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
console.log('2D Array :',data);
//