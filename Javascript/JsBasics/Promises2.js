// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve,duration)
//     })
// }
// function callback() {
//     console.log("5 second has passed");
    
// }
// setTimeoutPromisified(5000).then(callback);

// ********************************************* //

// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve,duration)
//     })
// }
// function callback1() {
//     console.log("hi");
// }
// function callback2() {
//     console.log("hello");
// }
// function callback3() {
//     console.log("hello there");
// }
// setTimeoutPromisified(1000).then(callback1);
// setTimeoutPromisified(3000).then(callback2);
// setTimeoutPromisified(5000).then(callback3);

//-------------------------------------//

// setTimeout(function() {
//     console.log("Hi");
//     setTimeout(function() {
//         console.log("Hello");
//     setTimeout(function () {
//         console.log("Hello There");
//     },5000)    
//     },3000)
// },1000)

//----------------------------------------//

// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve,duration)
//     })
// }

// setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there");
//       });
//     });
//   });

//----------------------------------------//

// Promises Chaining

// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve,duration)
//     })
// }

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

//************************************************* //

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();




