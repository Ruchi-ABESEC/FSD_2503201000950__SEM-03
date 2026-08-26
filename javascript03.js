//operations 

let value = 3
let negvalue = -value
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

console.log(null>0) 
// false because null is converted to number 0 and 0 is not greater than 0 so it returns false

console.log(null==0) 
// false because null is not equal to 0 so it returns false

console.log(null>=0) 
// true because null is converted to number 0 and 0 is equal to 0 so it returns true
