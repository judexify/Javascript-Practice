"use strict";
// const friend1 = "Stanley";
// const friend2 = "Bayo";
// const friend3 = "Jude";

const friends = ["stanley", "Bayo"];
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[0] = "judex";
console.log(friends);

// wondering how i redeclared friends after using const right
// only primitive cant change status and arrays arent
// primitive
const firstName = "jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 2025, "teacher", friends];
console.log(jonas);

// Exercise
// const calcage2 = function (birthYear2) {
//   return 2025 - birthYear2;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcage2(years[0]);
// const age2 = calcage2(years[2]);
// const age3 = calcage2(years[2]);
// console.log(age1, age2, age3);

//  Car Factory

// A car factory produced cars
//  in the years [1990, 2000, 2010, 2020, 2024].
// Write a function that calculates,
//  the age of each car model in 2025.
// Pick 3 values from the array
// and calculate their ages

const carProductionYear = [1990, 2000, 2010, 2020, 2024];
const carAge = (carYear) => {
  const carAgeCalculator = 2025 - carYear;
  return carAgeCalculator;
};
const carAgeOne = carAge(carProductionYear[0]);
const carAgeTwo = carAge(carProductionYear[1]);
const carAgeThree = carAge(carProductionYear[carProductionYear.length - 1]);

console.log(carAgeOne, carAgeTwo, carAgeThree);

const age = [
  carAge(carProductionYear[0]),
  carAge(carProductionYear[1]),
  carAge(carProductionYear[carProductionYear.length - 1]),
];
console.log(age);

// ARRAY METHODS
const birds = ["turkey", "chicken", "pigeons"];
birds.push("parrot");
console.log(birds);
birds.unshift("falcon");
const popped = birds.pop();
console.log(popped);
birds.shift();
console.log(birds);

if (birds.includes("falcon")) {
  console.log("you have a chicken");
} else {
  console.log("get a bird ");
}

// CHALLENGE #2

// Steven wants you to improve his tip calculator,

// using the same rules as before

// — tip 15% of the bill if the bill value is between 50 and 300,

// and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill

// value as an input and returns the corresponding tip,

// calculated based on the rules above

// (you can check out the code from the first tip calculator challenge if you need to).

// Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill,

// calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

const bills = [125, 555, 44];
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else if (bill > 300) {
    return bill * 0.2;
  } else {
    return 0;
  }
};
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// 1. Hotel Rooms

// A hotel tracks how many nights each guest stayed: [2, 5, 10, 1, 7].
// Write a function that calculates the total bill for each guest, where:

// each night costs $50.

// If a guest stays more than 7 nights, they get a 10% discount.
// Store the results in an array called bills.

const howManyNight = [2, 5, 10, 1, 7];
const billCalculated = function (nightSpent) {
  const eachNight = nightSpent * 50;
  if (nightSpent > 7) {
    return eachNight - eachNight * 0.1;
  } else {
    return eachNight;
  }
};
const hotelCounter = billCalculated(howManyNight[0]);
console.log(hotelCounter);

// 2. Exam Scores
// An array contains student scores: [45, 88, 76, 59, 92].
// Write a function that checks:

// If a score is below 50, the student fails.

// Otherwise, they pass.
// Return an array of "Pass" or "Fail" for each score.

const studentScores = [45, 88, 76, 59, 92];
const students = function (studentScore) {
  if (studentScore > 50) {
    return `you passed my friend with a mark of ${studentScore}.`;
  } else {
    return `you failed my friend with a mark of ${studentScore}, you'd repeat!!!`;
  }
};

const examResult = [
  students(studentScores[0]),
  students(studentScores[1]),
  students(studentScores[2]),
  students(studentScores[3]),
  students(studentScores[4]),
];
console.log(examResult);

// 3. Fuel Consumption
// A taxi company records kilometers
//  driven by each car in a day: [120, 350, 90, 200, 150].
// Write a function that calculates fuel consumption for each car, where:

// every 10 km consumes 1 liter of fuel.

// If a car drives more than 300 km, add a 5-liter maintenance cost.
// Store the fuel used in a new array.

const distanceCovered = [120, 350, 90, 200, 150];
const fuelConsumption = function (carsDistance) {
  const fuelConsumptionCalc = carsDistance / 10;

  if (carsDistance > 300) {
    return fuelConsumptionCalc + 5;
  } else {
    return fuelConsumptionCalc;
  }
};
// const taxiCompany = [
//   fuelConsumption(distanceCovered[0]),
//   fuelConsumption(distanceCovered[1]),
//   fuelConsumption(distanceCovered[2]),
//   fuelConsumption(distanceCovered[3]),
//   fuelConsumption(distanceCovered[4]),
// ];
const taxiCompany = distanceCovered.map(fuelConsumption);
console.log(taxiCompany);

// 4. Movie Tickets
// A cinema sold tickets at different prices depending on age: ages [10, 25, 17, 40, 8].
// Write a function that calculates the ticket price for each age:

// under 12 → $5

// 12–17 → $7

// 18+ → $10
// Store all ticket prices in a prices array.

const ages = [10, 25, 17, 40, 8];
const ticketPrice = function (age) {
  if (age >= 18) {
    return `10$`;
  } else if (age >= 12 && age <= 17) {
    return `7$`;
  } else {
    return `5$`;
  }
};
const ticketMan = ages.map(ticketPrice);
console.log(ticketMan);
// I was curious what about function calling functions with arrays?
// Printing Press Pages

// You run a printing press. Each worker can print 30 pages per hour.

// Write one function that calculates
//  the pages a worker can print in given hours.

// Write another function that, given an array of workers’ hours,
//  uses the first function to calculate pages for each worker.

// Array data: [5, 8, 2, 6] (hours worked by 4 workers).

const workersHours = [5, 8, 2, 6];
const workersTime = function (hoursToPrint) {
  return hoursToPrint * 30;
};
const printingPress = function (workers) {
  const work = workersTime(workers);
  return work;
};
const bursaryDept = workersHours.map(printingPress);
console.log(bursaryDept);

// School Exam Grading

// You need a function that checks
// if a score is pass (≥ 50) or fail (< 50).

// Write another function that takes an array of scores,
// and for each score, calls the pass/fail checker.

// Array data: [45, 88, 32, 76, 59]
const examScores = [45, 88, 32, 76, 59];
const examCalc = function (scores) {
  if (scores >= 50) {
    return `you've passed`;
  } else {
    return `Your score is ${scores}, you have failed`;
  }
};
const examResults = function (theScores) {
  const examRes = examCalc(theScores);
  return examRes;
};
const examChecker = examScores.map(examCalc);
console.log(examChecker);
