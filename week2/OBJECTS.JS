//   -----------------------------------------------------------------------------------------------
//                                        Objects                                                   //
//--------------------------------------------------------------------------------------------------

// singleton 
// Object.create


// object literals 

const mysymbol=Symbol("key")
const mysymbol2= Symbol("key2")
const jsuser= {
    name:'nitin',
    'full_name':'Nitin kumar',
    age:18,
    location:'bijnor',
    email:'nitin@gmail.com',
    isloginin:false,
    lastlogin:['monday','tuseday','sunday'],
    mysymbol:'my symbol',
    [mysymbol2]:'Real type declare the symbols'
}

// console.log(jsuser.name)
// console.log(jsuser['name'])

// onsole.log(jsuser.full_name) => given the error 
console.log(jsuser['full_name'])

// console.log(jsuser.mysymbol,' ->Type :',typeof(jsuser.mysymbol));// return my symbol but data types is not symbol it is string

console.log(jsuser[mysymbol2],' ->Type :',typeof(jsuser[mysymbol2]));

// update the value 
jsuser.age=20
console.log(jsuser.age);

// lock the value never update   useing the -> freeze()
// Object.freeze(jsuser)
jsuser.email="dell@gmail.com"
console.log(jsuser.email)// return nitin@gmail.com no update the email 


jsuser.greetng = function(){
    console.log(`Hello js user ${this.full_name}`);
}

console.log(jsuser.greetng);// return the function object :  [Function (anonymous)]
console.log(jsuser.greetng()); //Hello js user undefined

