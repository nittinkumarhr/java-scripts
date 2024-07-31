"hello "+ "world"
const name ='nitin'
const repo = 50


// console.log(name + repo) old version
 
console.log(`Hello my name is ${name} and  my repo is ${repo}`)

// New method to decaler string 

const gameName =new String('nitin kumar')

console.log(gameName)


// /*NOTE -  String method 

console.log(`Return the length of string ${gameName.length}`)//#endregion :=>Return the length of string 11

console.log(`Return the all Charcter in uper case ${gameName.toUpperCase()}`)

console.log(`Return the  string based on index :${gameName.charAt(2)}`)

console.log(`Return the given string index value  baased on character ${gameName.indexOf(5)}`)

const newString= gameName.substring(0,4)
console.log(`Return the substring  given indexing value ${newString}`)

const rev =gameName.slice(2,3)

console.log('slicng the string given indexing '+rev)

const url ='nitin_ kumar'

console.log(url.replace('_',''))

console.log(`check the string particular string ${url.includes('nitin')}`)

console.log(`String convert into array :${url.split(' ')}`)