"use strict";

// function is like a machine
// a machine needs to perform a particular task
// a function performs a particular task

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges. `;
//   return juice;
// }

// const fruitDispencer = fruitProcessor(4, 5);
// console.log(fruitDispencer);

// A printer can print 50 pages per minute.
// Write a function that takes the number of pages as input
//  and tells you how many minutes it will take.

function printingMachine(pages) {
  // const time = pages / 60; ❌ i was thinking 60 seconds make 1 minutes
  // javascript needs little basics of maths
  const time = pages / 50;
  const print = `for ${pages} pages, it'll take you ${time} minutes`;
  return print;
}

const printerDisplay = printingMachine(100);
console.log(printerDisplay);
// Output --- for 100 pages, it'll take you 2 minutes

//  You enter an amount to withdraw.
// The machine gives you the fewest notes
// possible (₦1000, ₦500, ₦200).
// Write a function that calculates
//  how many of each note you’ll get.
function atmMachine(cashToWithdraw) {
  const thousands = Math.floor(cashToWithdraw / 1000);
  cashToWithdraw = cashToWithdraw % 1000;
  // % is a modulus operator

  const fiveHundreds = Math.floor(cashToWithdraw / 500);
  cashToWithdraw = cashToWithdraw % 500;
  // % is a modulus operator

  const twoHundreds = Math.floor(cashToWithdraw / 200);
  cashToWithdraw = cashToWithdraw % 200;

  const Hundreds = Math.floor(cashToWithdraw / 100);
  cashToWithdraw = cashToWithdraw % 100;
  // % is a modulus operator

  return `You will receive: ${thousands} x ₦1000 notes, ${fiveHundreds} x ₦500 notes, ${twoHundreds} x ₦200 notes,${Hundreds} x ₦100 notes .`;
}

console.log(atmMachine(1250));

// function declaration

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const ageCalculation = calcAge1(2000);
console.log(ageCalculation);

//function expression
// const calcage2 = function (birthYear2) {
//   return 2025 - birthYear2;
// };
const ageCalculate = calcage2(2000);
console.log(ageCalculate);

// differences
// function declaration starts with function keyword
// in function declaration, you can call the function before the function body
//
// function expression starts with a const because function is a value
// you cant call the function before the body

// Arrow Function
const calcage3 = (birthyear3) => 2025 - birthyear3;
const ageCalculater = calcage3(2000);
console.log(ageCalculater);

const yearsUntilRetirement = (birthyear4, firstName) => {
  const age = 2025 - birthyear4;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Bob"));

// Function callling other function
// machine working before a machine

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} apples and ${orangePieces} oranges. `;
  return juice;
}

const fruitDispencer = fruitProcessor(4, 5);
console.log(fruitDispencer);

// Word Problems

// Printing Machine (with paper supplier)

// A printing machine prints 60 pages per minute.

// But before it can print, it must check if there’s enough paper.

// Write one function paperCheck() to check if paper is enough.

// Write another function printingMachine() that calls

//  paperCheck() before calculating time.

// my solution
const paperCheck = function (paper) {
  if (paper > 0) {
    console.log(`You have enough paper`);
    return true;
  } else {
    console.log("You dont have enough paper");
    return false;
  }
};

const printingMachin = function (paper) {
  const checker = paperCheck(paper);
  const machineCalc = paper / 60;
  return machineCalc;
};

const printerDispla = printingMachine(0);
console.log(printerDispla);

// Chat gpt solution
// Function to check if paper is available
const paperCheck1 = function (paper) {
  if (paper > 0) {
    return true; // ✅ return a useful value
  } else {
    return false; // ✅ tells us clearly "not enough paper"
  }
};

// Function for the printing machine
const printingMachine1 = function (paper1) {
  const checkerq = paperCheck1(paper1); // calls the first function

  if (!checkerq) {
    return "You don't have enough paper"; // stop early
  }

  const machineCalc1 = paper1 / 60; // time to print
  return `For ${paper1} pages, it’ll take ${machineCalc1} minutes`;
};

// Call the machine with 0 paper
const printerDisplay1 = printingMachine1(0);
console.log(printerDisplay1);

// Call the machine with 120 paper
const printerDisplay2 = printingMachine1(120);
console.log(printerDisplay2);

// 2. Juice Making Machine (with fruit cutter)

// A juice machine needs fruit slices.

// Each fruit gives 4 slices.

// Write a fruitCutter() function

// that takes number of fruits and returns slices.

// Write a juiceMachine() function

// that uses fruitCutter() to calculate

// how many glasses of juice can be made (say 4 slices = 1 glass).

const fruitCutter = (fruit) => {
  return fruit * 4;
};
const juiceMachine = (apples, grapes) => {
  const fruitSlicesForApple = fruitCutter(apples);
  const fruitSlicesForGrapes = fruitCutter(grapes);

  const juiceMade = `you'll have ${
    fruitSlicesForApple / 4
  } glasses of apples and ${fruitSlicesForGrapes / 4} glasses of grapes`;
  return juiceMade;
};
console.log(juiceMachine(4, 4));
