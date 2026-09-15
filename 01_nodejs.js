// const fs = require("fs");
// const text = fs.readFileSync("dele.txt", "utf-8");
// console.log(text);    
// output writing in browser js and developper console 

//******* 

// const fs = require("fs");
// let  text = fs.readFileSync("dele.txt", "utf-8");
// text = text.replace("content","ruchi");
// console.log(text);
// fs.writeFileSync("dele.txt", text);
// output writing in browser js and developper console

//***************


const fs = require("fs");
let  text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser","ruchi");
console.log("creating a new file..... ");
console.log(text);
// console.log("creating a new file..... ");
fs.writeFileSync("ruchi.txt", text);





