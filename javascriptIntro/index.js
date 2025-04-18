// // logical operators.

// // marks > or = 85  grade = A
// // marks less than 85 and more than 75 grade = B
// // marks less than 75 more than 65 grade = C
// // marks less than 65 grade = F
// // marks more than 100 or less than zero  Error

// let marks = 89;

// let grade;

// if (marks > 85) {
//   grade = "A";
// } else if (marks < 85 && marks > 75) {
//   grade = "B";
// } else if (marks < 75 && marks > 65) {
//   grade = "C";
// } else if (marks < 65) {
//   grade = "F";
// }

// console.log(grade);

// let number = 2;

// for (let i = 1; i <= 10; i++) {
//   console.log(6 * i);
// }

// let num = 400000000;

// if (num % 2 !== 0) {
//   console.log("odd");
// } else {
//   console.log("even");
// }

// if (num % 2 == 0) {
//   console.log("Even");
// } else if (num % 2 !== 0) {
//   console.log("odd");
// }

//  for (initializer; condition; increment){
//  code block
// }

// while loops.
// usually used when the range is unknown, and we need to exit on a specific condition

// let i = 0;

// while (true) {
//   i++;

//   if (i === 5 || i === 8) {
//     continue;
//   }
//   console.log(i);

//   if (i === 100) {
//     break;
//   }
// }

// do {
//   number = parseInt(prompt("Enter a number greater than zero"));
// } while (isNaN(number) || number <= 0);

// FUNCTIONS

function greet(name) {
  return "Hello and welcome " + name;
}

let alisMessage = greet("ali");

console.log(alisMessage);

console.log(greet("Khan"));

let ahmadsMessage = greet("ahmad");

console.log(ahmadsMessage);

function add(num1, num2) {
  return num1 + num2;
}
function sybrtact(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

let a = 5;
let b = 6;

console.log(add(a, b));
console.log(add(a, b));
console.log(add(a, b));
console.log(add(a, b));
console.log(add(a, b));
console.log(sybrtact(a, b));
console.log(multiply(a, b));

// two types of functions, value returning and void

function changeBackgroundColor() {
  // document.getElementById('body').appendChild('')
  //
  //
}


function getUserId(){
  return id
}

function checkUserId(){

}

function logOut (){

}


