// let,count and var 

const accountID = "12345"
let accountEmail = "ee@gmail.com "
var accountPassword = "123456"
accountCity = "New York"

// variables can be declared by two methord var and let 

// accountID = 2 // not allowed 

accountEmail = "iii@gmail.com"
accountPassword = "1234567"         
accountCity = "Los Angeles"

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// in tabular form 

console.table({accountID, accountEmail, accountPassword, accountCity});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//output 
// 12345
// iii@gmail.com
// 1234567
// Los Angeles
// ┌─────────────────┬─────────────────┐
// │ (index)         │ Values          │
// ├─────────────────┼─────────────────┤
// │ accountID       │ '12345'         │
// │ accountEmail    │ 'iii@gmail.com' │
// │ accountPassword │ '1234567'       │
// │ accountCity     │ 'Los Angeles'   │
// └─────────────────┴─────────────────┘


/*
prefer not to use var 
because of issue in block scope and functional  scope
*/


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Datatypes and ECMA in JavaScript

"use strict";  // treat all JS code as newer version 

// alert(3+3)  // we are using nodejs , not browser so alert will not work

console.log(3+3); console.log(3-3);  // yesa likhegi to code readablity nhi rahega to next line me lkha iske bad ; 

let name = "ruchi"
let age = 9 
let isLoggedIn = false


let state;  // undefined
let city = null  // empty value but defined





// number => 2 to power 53
// bigint => larger than 2 to power 53
// string => any text inside '' or "" or ``
// boolean => true or false
// null => standalone value that represents null
// undefined => value taken by a variable that is not yet defined
// undefined => value taken by a variable that is not yet defined
// symbol => unique and cannot be changed
// object => a collection of related data
// function => a block of code that performs a task or calculates a value
// ECMAScript => standard for scripting language like JavaScript


console.log(typeof "ruchi");  // string
console.log(typeof 9);  // number
console.log(typeof 9n);  // bigint
console.log(typeof true);  // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);  // object => bug in js
console.log(typeof Symbol("id"));   // symbol
console.log(typeof {name:"ruchi", age:9}); // object


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// datatype conversion confusion (why stying to number and number to string is not working properly in js or it is confusing )



