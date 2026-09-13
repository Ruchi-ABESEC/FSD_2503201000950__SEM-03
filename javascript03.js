//operations 

// let value = 3
// let negvalue = -value
// console.log(negvalue) // -3

// console.log(3 + 2) // 5
// console.log(3 - 2) // 1
// console.log(3 * 2) // 6
// console.log(3 / 2) // 1.5
// console.log(3 % 2) // 1

// let str1 = "hello"
// let str2 = "world"

// let str3 = str1 + str2 
// console.log(str3) // helloworld

// console.log(str1 + " " + str2) // hello world
// console.log(1+"2") // 12
// console.log("1"+2) // 12
// console.log("1"+"2") //12
// console.log("1"+2+2) // 122

// console.log(1+2+"2") // 32
// console.log("1"+2+2) // 122 why not 14 because js is reading from left to right and first it is adding 1+2=3 then it is adding 3+"2"=32


// console.log(true) //true
// console.log(+true) // 1
// console.log(true+) //error 
// console.log(+false) // 0
// console.log(+"") // 0

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Comparison of datatypes in javascript 


// console.log(2>1) // true
// console.log(2<1) // false
// console.log(2>=1) // true
// console.log(2<=1) // false
// console.log(2==1) // false
// console.log(2!=1) // true

// console.log("2">1) 
// // true because "2" is converted to number 2 and 2 is greater than 1 so it returns true   

// console.log("01">1)
//  // true because "01" is converted to number 1 and 1 is not greater than 1 so it returns false


// console.log("01">"1")
// false because "01" is converted to number 1 and "1" is converted to number 1 and 1 is not greater than 1 so it returns false

// console.log(null>0) 
// false because null is converted to number 0 and 0 is not greater than 0 so it returns false

// console.log(null==0) 
// false because null is not equal to 0 so it returns false

// console.log(null>=0) 
// true because null is converted to number 0 and 0 is equal to 0 so it returns true

// console.log(undefined>0)
// false because undefined is converted to NaN and NaN is not greater than 0 so it returns false    

// console.log(undefined==0)
// false because undefined is not equal to 0 so it returns false

// console.log(undefined>=0)
// false because undefined is converted to NaN and NaN is not greater than or equal to 0 so it returns false    

// console.log("2"== 2)
// true because "2" is converted to number 2 and 2 is equal to 2 so it returns true     


//************************stack and heap*********************************************************************************************************************************************************************************************************************

// stack(primitive), heap(non perimitive)

// let myname = "ruchi"

// let anothername = myname

// console.log(anothername);
// console.log(myname);

// let user = {
//     email: "rrr@gmail.com",
//     upi: "ruchi@upi"
// }

// let user2 = user;
// user2.email = "rrr123@gmail.com";

// console.log(user.email);
// console.log(user2.email);

//************************************************Strings in Javascript************************************************************************************************************************************************************************* 

// const name = "ruchi"
// const  repocount = 4

//old methord to write string 
// console.log(name + repocount+ "value");

//new methord to write string
// console.log(`${name} ${repocount} value`); 
// console.log(`hello my name is ${name} and my repo count is ${repocount}`); // this will not work because we are using single quotes instead of backticks
//output: hello my name is ${name} and my repo count is ${repocount}


// const gameName = new String("pubgjuytrewsdfghjkk") // this is a string object
// console.log(gameName) // output: [String: 'pubg'] because we are using new keyword to create a string object

// console.log(gameName[0]) // output: p because we are accessing the first character of the string object
// console.log(gameName.__proto__) // output: String {} because we are accessing the prototype of the string object    
// console.log(gameName.length) // output: 4 because we are accessing the length of the string object
// console.log(gameName.toUpperCase()) // output: PUBG because we are converting the string object to uppercase
// console.log(gameName.charAt(3)) // output: g because we are accessing the character at index 3 of the string object
// console.log(gameName.indexOf("g")) // output: 3 because we are accessing the index of the character g in the string object

// const  newString = gameName.substring(0,2)
// console.log(newString) // output: pu because we are accessing the substring of the string object from index 0 to 4

// const anotherString = gameName.slice(-2,4)
// console.log(anotherString); // output: juyt because we are accessing the substring of the string object from index -4 to 4   

// const newStringOne = "  ruchi   "
// console.log(newStringOne);
// console.log(newStringOne.trim()) // output: ruchi because we are removing the whitespace from the string object

// const url = "https://www.youtube.com/watch?v=5qap5aO4i9A"

// console.log(url.replace('?v', '-'));    // output: https://www.youtube.com/watch-=5qap5aO4i9A because we are replacing the %20 with - in the string object

// console.log(url.includes('ruchi')); // output: false because we are checking if the string object includes the substring ruchi or not
// console.log(url.includes('https')); // output: true because we are checking if the string object includes the substring https or not


//************************************************Number and Maths in Javascript*******************************************************************************************************************************************************************************************************************************************************

// const score = 900 
// console.log(score)


// const balance = new Number (100)
// console.log(balance);

//output 
// 900
// [Number: 100]

// console.log(balance.toString())  //output: 100 because we are converting the number object to string
// console.log(balance.toFixed(2))  //output: 100.00 because we are converting the number object to string with 2 decimal places
// console.log(balance.toPrecision(2)) //output: 1e+2 because we are converting the number object to string with 2 significant digits

// console.log(balance.toString().length); //output: 3 because we are converting the number object to string and then getting the length of the string


// const otherNumber = 123.456789

// console.log(otherNumber.toPrecision(4)) //output: 123.5 because we are converting the number object to string with 4 significant digits

// const hundred = 10000000
// console.log(hundred.toLocaleString("en-IN")) //output: 1,00,00,000 because we are converting the number object to string with Indian locale 

// **********************************************************math**************************************************************************************************************************************************************************************************************************************************************************



// console.log(Math)  // output Object [Math] {}
// console.log(Math.abs(-4)) // output: 4 because we are getting the absolute value of -4
// console.log(Math.round(4.7)) // output: 5 because we are rounding the number 4.7 to the nearest integer
// console.log(Math.ceil(4.7)) // output: 5 because we are rounding the number 4.7 up to the nearest integer
// console.log(Math.floor(4.7)) // output: 4 because we are rounding the number 4.7 down to the nearest integer


// console.log(Math.min(4, 7, 1, 9)) // output: 1 because we are getting the minimum value from the given numbers

// console.log(Math.max(4, 7, 1, 9)) // output: 9 because we are getting the maximum value from the given numbers  

// console.log(Math.random()) // output:0.2602557513810022 a random number between 0 and 1 because we are getting a random number between 0 and 1

// console.log(Math.random()*10 + 1) // output:3.364867189145572 a random number between 1 and 10 because we are getting a random number between 0 and 1 and then multiplying it by 10 and adding 1


// const min = 10 
// const max = 20 

// console.log(Math.floor(Math.random() *(max - min + 1) + min)) // output: a random number between 10 and 20 because we are getting a random number between 0 and 1 and then multiplying it by (max - min + 1) and adding min 

//***************************************************Date and time in depth in javascript*************************************************************************************************************************************************************************************************************************************************

//dates

// let myData = new Date()
// console.log(myData.toString())
// console.log(myData.toDateString())
// console.log(myData.toISOString())
// console.log(myData.toUTCString())
//output:
// Mon Jun 10 2024 12:34:56 GMT+0000 (Coordinated Universal Time)
// Mon Jun 10 2024
// 2024-06-10T12:34:56.789Z
// Mon, 10 Jun 2024 12:34:56 GMT


//let myCreatedDate = new Date(2023,0,23)


//////////////////////////////////////////////aarys in javascript**************************************************************************************************************************************************************************************************************************************************************************
// arrary in js are resizeable and can hold multiple data types
// const myarr = [1,2,3,4,5]
// console.log(myarr) // output: [1, 2, 3, 4, 5] because we are creating an array with 5 elements
//console.log(myarr[0]) // output: 1 because we are accessing the first element of the array


//array methods in js*******************


// console.log(myarr.length) // output: 5 because we are getting the length of the array
//myarr.push(6) // adds an element to the end of the array
//myarr.push(9) // adds an element to the end of the array
//myarr.pop() // removes the last element of the array

//myarr.unshift(9) // adds an element to the beginning of the array
//myarr.shift() // removes the first element of the array

// console.log(myarr.includes(2)); // output: true because we are checking if the array includes the element 2 or not

// const newarr = myarr.slice(1,4) // creates a new array with elements from index 1 to 3

// const newarr = myarr.join() // creates a new string with elements from the array separated by commas

// console.log(newarr); // output: "2,3,4" because we are creating a new string with elements from the array separated by commas

// console.log(myarr); // output: [9, 1, 2, 3, 4, 5] because we are adding an element to the beginning of the array

//*****slice,splice */
// console.log("A",myarr);
// const myn1 = myarr.slice(1,4) // creates a new array with elements from index 1 to 3
// console.log(myn1)


// console.log("B",myarr); // output: [9, 1, 2, 3, 4, 5] because we are creating a new array with elements from index 1 to 3

// const myn2 = myarr.splice(1,3) // removes 3 elements from index 1 and returns the removed elements
// console.log("C",myarr); // output: [9, 4, 5] because we are removing 3 elements from index 1 and returning the removed elements
// console.log("C",myn2); // output: [2, 3, 4] because we are removing 3 elements from index 1 and returning the removed elements

//***********************************************array part 2  */

// const marvel_hero = ["ironman","spiderman","thor","hulk","captain america"]
// const dc_heros = ["superman","batman","flash","aquaman","wonder woman"]

// marvel_hero.push(dc_heros) // adds the dc_heros array to the end of the marvel_hero array
// console.log(marvel_hero) // output: ["ironman", "spiderman", "thor", "hulk", "captain america", Array(5)] because we are adding the dc_heros array to the end of the marvel_hero array       


// console.log(marvel_hero[3][1]); //output : u 

// const all_heros = marvel_hero.concat(dc_heros) // creates a new array with elements from both arrays
// console.log(all_heros) // output: ["ironman", "spiderman", "thor", "hulk", "captain america", "superman", "batman", "flash", "aquaman", "wonder woman"] because we are creating a new array with elements from both arrays
 
//difference between concat and push is that concat 
// creates a new array with elements from both arrays while push adds 
// the second array to the end of the first array

// const all_heros = [...marvel_hero,...dc_heros] // creates a new array with elements from both arrays using spread operator
// console.log(all_heros) // output: ["ironman", "spiderman", "thor", "hulk", "captain america", "superman", "batman", "flash", "aquaman", "wonder woman"] because we are creating a new array with elements from both arrays using spread operator

// const another_array = [1,2,3,4,[5,6,7],8,[9,10,11]]
// const real_another_array = another_array.flat() // creates a new array with elements from the original array and flattens the nested array
//  console.log(real_another_array) // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] because we are creating a new array with elements from the original array and flattening the nested array

// const real_another_array = another_array.flat(Infinity) // creates a new array with elements from the original array and flattens the nested array upto 2 levels
// console.log(real_another_array) // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] because we are creating a new array with elements from the original array and flattening the nested array upto 2 levels



// console.log(Array.isArray("ruchi")) // output: false because we are checking if the string "ruchi" is an array or not
// console.log(Array.from("ruchi")) // output: ["r", "u", "c", "h", "i"] because we are converting the string "ruchi" into an array
// console.log(Array.from({name: "ruchi"})) // output: [] because we are converting the object {name: "ruchi"} into an array
//intersting aBOVE FOR INTERVIEW 

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4)) // output: [100, 200, 300, 400] because we are creating an array with the given elements 










