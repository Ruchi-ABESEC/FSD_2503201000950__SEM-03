//objects in depth in js 

//*******singleton nhi bnata h jb librals se , constructor se banega to singleton bnega

////////////////////////object literals

// const mysym = symbol ("key1") //symbol is a primitive data type in js

// const jsuser = {
//     name: "ruchi",
//     age: 30,
//     // [mysym] : "mykey1",
//     email: "john@example.com",
//     location : "India",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Friday"],
//     "fullName": "ruchi kumari"
// }

// console.log(jsuser)
//output 
// {
//   name: 'ruchi',
//   age: 30,
//   email: 'john@example.com',
//   location: 'India',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Friday' ]
// }

//console.log(jsuser.email) //not correct way to access the value of email property
// output john@example.com

//console.log(jsuser["email"]) //correct way to access the value of email property
// output john@example.com

// console.log(jsuser) 
//output
// {
//   name: 'ruchi',
//   age: 30,
//   email: 'john@example.com',
//   location: 'India',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Friday' ],
//   fullName: 'ruchi kumari'
// }

// console.log(jsuser["fullName"]) //correct way to access the value of fullName property
// output ruchi kumari
// console.log(jsuser[mysym]) //correct way to access the value of mysym property
// output mykey1

// console.log(typeof jsuser[mysym])

// jsuser.email = "ppp@gmail.com"
// object.freeze(jsuser) //freeze the object so that we cannot change the value of any property of the object  
// jsuser.email = "newemail@gmail.com"
// console.log(jsuser) //output ppp@gmail.com


// ṇjsuser.greeting = function(){
    // console.log("hello jsuser"); //this is a method of the object jsuser
    //output hello jsuser
// }


// console.log(jsuser.greeting()); //output undefined
// console.log(jsuser.greeting); //output [Function (anonymous)]


// jsuser.greetingTwo = function(){
    // console.log(`hello jsuser, ${this.name}`); //this is a method of the object jsuser
    //output hello jsuser, ruchi
// }

// console.log(jsuser.greetingTwo()); //output hello jsuser, ruchi



//******************************************** */

// const tinderuser = new object ()

// const tinderuser = {}
// // console.log(tinderuser) //output {}


// tinderuser.id = "123abc"
// tinderuser.name = "ruchi"
// tinderuser.isLoggedIn = false
// // output
// // { id: '123abc', name: 'ruchi', isLoggedIn: false }

// const regularuser = {
//     email:"sss@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "ruchi",
//             lastname: "kumari"
//         }
//     }
// }

//console.log(regularuser.fullname.userfullname.firstname) //output ruchi

//const obj1 = {1:"a",2:"b"}
//const obj2 = {3:"c",4:"d"}

//const obj3 = { obj1 ,obj2 }
//console.log(obj3) //  output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }




// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = { obj1 ,obj2 }
// 1.const obj3 = Object.assign(obj1,obj2)
//2. const obj3 = Object.assign({},obj1,obj2)
//3. const obj3 = {...obj1, ...obj2}
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


/////////////////////////* Object de-structure and JSON API intro*/////////////////////////////////// */

// const course = { 
//     coursename: "js in hindi", 
//     price: 9999, 
//     courseinstructor: "ruchi" 
// };

// Access it directly from the object
// console.log(course.couseinstractor); 

//2nd way 

// const {courseinstructor: instructor}= course
// console.log(instructor)

// *****************************Functions and parameter in javascript*****************************************************************

// function saymyname(){
//     console.log("r")
//     console.log("u")
//     console.log("c")
//     console.log("h")
//     console.log("i")
// }
// saymyname()
//output :-
// r
// u
// c
// h
// i

// function addtwonumber(number1,number2){
//     console.log(number1+number2)
// }
// addtwonumber() // output : NaN
// addtwonumber(3,"a") // output: 3a
// addtwonumber(3,5) // output: 8
// const result = addtwonumber(3,5)
// console.log("Result: ",result);
// output : 
//8
// Result:  undefined


//------------


// function addtwonumber(number1,number2){
//     let result = number1 + number2
//     return result
// }
// const result = addtwonumber(3,5)
// console.log("Result: ",result);
// output : 
//8


function loginusermessage(username){
    return `${username} just logged in`;
}
// console.log(loginusermessage("ru"));
//output ru just logged in

console.log(loginusermessage("")) // just logged in
console.log(loginusermessage("")) // undefined just logged in
























































































