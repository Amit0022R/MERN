// let firstName = "AMiT";    
// const age = 30;      
// var isStudent = true;
// console.log(firstName); //AMiT
// console.log("firstName"); // firstName
// console.log(age); // 30 
// console.log(isStudent); // true

// isStudent = "Anuj";
// isStudent = 99;
// console.log(isStudent); //99

// function greet(name){
//     return "Hello, " + name;
// }
// let ans = greet("AMiT"); 
// console.log(ans);

// function sum( a, b) {
//     let totalSum = a + b;
//     return totalSum;
// }

// let ans = sum(49,51);
// let ans2 = sum(49,1);
// console.log(ans);
// console.log(ans2);

// let users = ["Amit", "Anuj", "Bhiwani","India","Haryana","Delhi","Punjab"];

// for(let i=0;i<users.length;i++) {
//     console.log(users[i]);   
// }

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);


// let user = {
//     name: "Amit",
//     age: 20
// }
// console.log("Amit's age: " + user.age);


function greet(user) {
    console.log("Hi " + user.name + " Your age: " + user.age);
    
}
let user = {
    name: "Amit",
    age: 20
}
greet(user)
