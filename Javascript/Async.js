// const fs = require('fs'); // import fs library
// fs ia an external library that stands for file system
// Node.js file system module allows you to work with filesystem on your computer
// const contents = fs.readFileSync('a.txt', 'utf-8');
// console.log(contents);

// const { log } = require("async");

// const data = fs.readFileSync('b.txt','utf-8');
// console.log(data);

// readFileSync => read file synchronously
// readFile => read file asynchronously

// function sum(a, b) {
//     return a + b;
//   }
//   function multiply(a, b) {
//     return a * b;
//   }
//   function subtract(a, b) {
//     return a - b;
//   }
//   function divide(a, b) {
//     return a / b;
//   }
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
// /   function op(a,b) {
//    return a +b;
//  }
//   console.log(doOperation(1, 2, sum))

// const fs = require('fs'); 

// function print(err,data) {
//     console.log(data);
// }
// fs.readFile("a.txt", "utf-8", print); // asynchronously

// fs.readFile("b.txt","utf-8", print); // asynchronously
 
// console.log("Done!"); 


// function run() {
// 	console.log("I will run after 1s");
// }
// setTimeout(run, 1000);
// console.log("I will run immedietely");


function timeout() {
    console.log("timeout completed");
}
console.log("Hi");

setTimeout(timeout,1000);
console.log("Welcome housfull 5");

let c =0;
for(let i=0;i<10000000000;i++) {
    c = c+ 1;
}
console.log("Expensive operation done");
