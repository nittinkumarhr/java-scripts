//==================== Array part 2=============================================================

const arr1=['d1','d2','d3','d4','d5']
const arr2=['d5','d4','d3','d2','d1']

// arr1.push(arr2)
// console.log(arr1)// Concat the arr2 in arr1  [ 'd1', 'd2', 'd3', 'd4', 'd5', [ 'd5', 'd4', 'd3', 'd2', 'd1' ] ]

const new_arr=arr1.concat(arr2)
console.log('concat :',new_arr)


// spard opertor like -> [...A1,...A2,...A3 ------ etc]
const new_arr2= [...arr2,...arr1]
console.log('spard method :',new_arr2)// ['d5','d4','d3','d2','d1','d1','d2','d3','d4','d5']


// flat()
const another_arr=[1,2,3,4,[4,3,2,1],5,6,[6,5,[1,2,3,4,5]]]
const real_another_arr =another_arr.flat(Infinity)
console.log('flat :',real_another_arr)//[1, 2, 3, 4, 4, 3, 2,1, 5, 6, 6, 5, 1, 2,3, 4, 5]


//  isarray => chek the array type
console.log(Array.isArray('nitin')) // flase
console.log(Array.isArray(['nitin','kumar']))// true 

// from ()
console.log(Array.from('nitin'))//[ 'n', 'i', 't', 'i', 'n' ]
console.log(Array.from({name:'nitin'}))// object no convert dricetly into the array  deifne keys and itmes which types of make the array  return the empty array ->[]



// of()

let s1=12
let s2=23
let s3=32
console.log(Array.of(s1,s2,s3))// return the array -> [ 12, 23, 32 ]





