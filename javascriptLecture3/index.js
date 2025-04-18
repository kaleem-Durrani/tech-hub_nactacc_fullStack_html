// let myString = "abcbdefg";

// let myName = "jahanzaib";

// let myAge = 22;

// console.log(myString.at(3));
// console.log(myString.charAt(0));

// console.log(myString.concat("hij"));

// myString = myString + "klmn";

// console.log(myString);

// console.log(myString.endsWith("lmn"));

// console.log(myString.includes("def"));

// console.log(myString.indexOf(""));

// console.log(myString.lastIndexOf("b"));

// console.log(myString.length);

// console.log(myString.padEnd(15, "a"));

// console.log(myString.repeat(3));

function reversedString(originalString) {
  let reversedString = "";

  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString = reversedString + originalString.at(i);
  }

  return reversedString;
}

// let stringToReverse = "abcdefg";

// stringToReverse = reversedString(stringToReverse);

// console.log(stringToReverse);

// let numbers = [10, 2, 32, 4, 67];

// console.log(numbers);

// let sum = numbers[0] + numbers[1];

// if (sum > 10 && sum < 20) {
//   numbers.push(4);
// } else {
//   numbers.pop();
// }

// console.log(numbers);

// Looping through arrays

let numbers = [5, 6, 3, 16, 10, 4, 8, 12, 33, 21, 52];

for (let i = 0; i < numbers.length - 1; i++) {
  
  if (numbers[i] % 2 !== 0 && numbers[i] !== 3) {
    console.log(numbers[i]);
  }
}
