// Objects, dictionaries, Hash tables

// format

// key : value

// list is initialized by square brackets []

// objects are initialized by curly brackets {}

// let myObject = {
//   name: "Ali",
//   email: "ali@gmail.com",
//   job: "Dev",
//   age: 35,
//   isEmployed: true,
// };

// let valueToPrint = "job";

// console.log(myObject[valueToPrint]);

// nested if conditions

// let myScore = 50;

// function grade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else {
//     return "Needs Improvement";
//   }
// }

// console.log(grade(myScore));

// let obj = {
//   name: "ali",
//   age: "18",
//   hasJob: true,
//   yearsEmployed: [2000, 2001, 20002, 2015, 2016],
//   address: {
//     house: "house no 5",
//     street: "street no 2",
//     road: "joint road",
//     city: {
//       name: "quetta",
//       postal: {
//         start: 123,
//         end: 543,
//       },
//     },
//     country: "pakistan",
//   },
// };

// const sales = [
//   {
//     id: 1,
//     product: "Laptop",
//     quantity: 2,
//     pricePerUnit: 1200,
//     date: "2025-04-15",
//     customer: "John Doe",
//   },
//   {
//     id: 2,
//     product: "Smartphone",
//     quantity: 5,
//     pricePerUnit: 800,
//     date: "2025-04-14",
//     customer: "Jane Smith",
//   },
//   {
//     id: 3,
//     product: "Headphones",
//     quantity: 10,
//     pricePerUnit: 150,
//     date: "2025-04-13",
//     customer: "Mark Johnson",
//   },
// ];

// console.log(sales);

// debugger;

// var length = 4;

// function callBack() {
//   console.log(this.length);
// }

// const obj = {
//   length: 5,
//   method() {
//     console.log(arguments);
//     console.log(arguments, length);
//     obj.callBack();
//   },
// };

// obj.method(callBack, 2, 3, 10, true);

// let outerVar = "Im outside!";

// function outer() {
//   function inner() {
//     console.log(outerVar); // inner has access to outerVar
//   }

//   return inner;
// }

// const myFunc = outer();
// myFunc(); // logs: "I’m outside!"

function createStopwatch() {
  let time = 0;
  let interval;

  function start() {
    if (!interval) {
      interval = setInterval(() => {
        time++;
        console.log(`Time: ${time}s`);
      }, 1000);
    }
  }
  function stop() {
    clearInterval(interval);
    interval = null;
  }
  function reset() {
    time = 0;
    console.log("Reset!");
  }
  function getTime() {
    return time;
  }

  return {
    start,
    stop,
    reset,
    getTime,
  };
}

const watch = createStopwatch();

console.log(watch);

const { start: stopWatchStart, stop, getTime, reset } = watch;

// start()

// stopWatchStart();

let nums = [1, 3, 4, 5, 6];

let mappedNums = nums.map((num, index, nums) => {
  return num + 5;
});

console.log(mappedNums);

// console.log(console.log());
