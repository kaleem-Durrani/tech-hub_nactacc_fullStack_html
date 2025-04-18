let names = ["ali", "khan", "ahmad", "jane", "doe", "max"];

// let lastNameInArray = names.pop();

// console.log(names);
// console.log(lastNameInArray);

// console.log(names.flat());

// names.forEach((element) => {
//   console.log(element);
// });

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// (num1, num2) => {
//   console.log(num1 + num2);
// };

// add(1, 2);

const myArr = [
  [1, 2, [9, [11]]],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat((depth = 4));

// console.log(newArr);

let numbers = [5, 6, 7, 8];

let reducedNumbers = numbers.reduce(
  (total, currentValue, currentIndex, array) => {
    // console.log(total, currentValue, currentIndex);

    return total + currentValue - currentValue * 0.1;
  },
  0
);

// numbers.map((el, i) => {
//   //   console.log(i);
//   console.log(el, i);
// });

console.log(reducedNumbers);

func();

console.log(blockVariable);

console.log(blockVariable);

window.blockVariable;

// console.log((10 / 26) * 100);

// addition(5, 3);

// console.log(names);

// console.log(names);

// names.push("john");

// console.log(names);

// console.log(names[-1]);
// console.log(names.at(-1));

// for (let i = 0; i < names.length; i++) {
//   //   console.log(i);
//   //   console.log(names[i]);
//   if (names[i].includes("n")) {
//     console.log(names[i]);
//   }
// }

// let myString = "a random string";
