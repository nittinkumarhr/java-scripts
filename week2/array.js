const a=[0,2,3,4,56,true]

const a2=new Array(1,2,13,4,5)
console.log(a2)
console.log(a[0])

// method of Array 

a2.push(6)
console.log(a2)

a2.pop()
console.log(a2)


a2.unshift(8)
console.log('unshift',a2)

a2.shift()
console.log('shift',a2)

console.log('includes :',a2.includes(9))
console.log('includes :',a2.includes(2))

console.log('Indexof :',a2.indexOf(90))// not found return -1
console.log('Indexof :',a2.indexOf(4))// if found return the index of items 

const new_arr=a2.join()
console.log('Array :',a2, 'Type :',typeof(a2))
console.log('join : ',new_arr,'TYpe:',typeof(new_arr))// add all elements of array into the strings


// slice and splice  =>slice return array of escetion in a array 
const new_arr2=a2.slice(1,3)

console.log('Slice :',new_arr2)
console.log('Array :',a2)


const new_arr3=a2.splice(1,3)

console.log('Splice :',new_arr3)
console.log('Array :',a2, 'Type :',typeof(a2))




