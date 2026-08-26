// datatype conversion confusion (why stying to number and number to string is not working properly in js or it is confusing )

let score = "33abs";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// "33.33" => 33.33
// true => 1 or false => 0

let isLoggedIn = 1;
//respected output 
// 1 => true or 0 => false
//"ruchi " => true or "" => false


console.log(typeof isLoggedIn);
console.log(typeof (isLoggedIn));
//output => string 

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
//output => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
//output => "33"

