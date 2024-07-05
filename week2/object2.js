//---------------------------------------------------------------------------------
//                                        Objects                               //
//--------------------------------------------------------------------------------
// const  user = new Object()// singleton  objects

const user={}//non singleton  objects

user.id='123a'
user.name='nitin'
user.isloggedin=false
// console.log(user);//{ id: '123a', name: 'nitin', isloggedin: false }


const obj1 ={1:'a',2:'b',3:'c'}
const obj2 ={4:'d',5:'e',6:'f'}
// const obj3= {obj1,obj2}
// console.log(obj3)
// {  no concat the two dictionary into a single dictionary
//    obj1: { '1': 'a', '2': 'b', '3': 'c' },
//    obj2: { '4': 'd', '5': 'e', '6': 'f' }
// }

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)// return the concation objrcts like this : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// spard opertor use to concat the objects 
const  obj4 ={...obj1,...obj2,}
console.log(obj4)



