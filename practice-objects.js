"use strict";
// used for describing things
// const aboutJudex = {
//   firstName: "Jude",
//   lastName: "Oluwadunsi",
//   Age: 2025 - 2025,
//   friends: ["jude", "judex", "judexify"],
// };
// console.log(aboutJudex);
// // dot notation which is a declaration
// console.log(aboutJudex.lastName);
// // bracket notation is an expression which allows for
// // computation of value
// console.log(aboutJudex["lastName"]);

// const nameKey = "Name";
// console.log(aboutJudex["first" + nameKey]);
// console.log(aboutJudex["last" + nameKey]);
// // const interestedIn = prompt("What do you want to know about me?");
// // console.log(aboutJudex[interestedIn]);

// // i noticed that while trying to get the infomation from Age
// // went through but was undefined for age why?
// // object data are case sensitive

// // CHALLENGE
// // 'Jude has 3 friends, and his bestfriend is judexify'
// const friendsLength = aboutJudex.friends.length;
// const bestFriend = aboutJudex.friends[2];
// console.log(
//   `${aboutJudex.firstName} has ${friendsLength} and his bestfriend is ${bestFriend}`
// );

// Object Method
const aboutJudex = {
  firstName: "Jude",
  lastName: "Oluwadunsi",
  birthYear: 2002,
  friends: ["jude", "judex", "judexify"],
  hasDriversLicence: true,
  // calcAge: function () {
  //   return 2025 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old and he has ${
      this.hasDriversLicence ? "a" : "no"
    } drivers licence`;
  },
};
// arrays are also objects

// this.birthYear in my own words is
// like check the current object and
// look for the value of the property
// birthYear
// CHALLENGE
// Jude is a 23 year old guy, and he has no driver's licence

console.log(aboutJudex.getSummary());
//

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations!

// Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).

// Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects).

// Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI.

// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

const clientOne = {
  name: "Mark Miller ",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const clientTwo = {
  name: "John Smith ",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

clientOne.calcBMI();
clientTwo.calcBMI();

console.log(clientOne.bmi, clientTwo.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

if (clientOne.bmi > clientTwo.bmi) {
  console.log(
    `${clientOne.name}'s BMI of (${clientOne.bmi}) is higher than ${clientTwo.name}'s BMI of (${clientTwo.bmi}) `
  );
} else if (clientOne.bmi === clientTwo.bmi) {
  console.log(
    `${clientOne.name}'s BMI of (${clientOne.bmi}) is the same with ${clientTwo.name}'s BMI of (${clientTwo.bmi}) `
  );
} else {
  console.log(
    `${clientTwo.name}'s BMI of (${clientTwo.bmi}) is higher than ${clientOne.name}'s BMI of (${clientOne.bmi}) `
  );
}

// HOTEL BILLING SYSTEM
// const guestOne = {
//   name: "MrEazi",
//   nightSpent: 8,
//   isVip: true,
//   amountToPay: function () {
//     const pricePerNight = 50;
//     const discountLevel1 = 0.2;
//     const discountLevel2 = 0.1;
//     this.amountPaid = this.nightSpent * pricePerNight;
//     if (this.nightSpent > 7 && this.isVip === true) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel1;
//     } else if (this.nightSpent > 7 && this.isVip === false) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel2;
//     } else {
//       this.amountPaid = this.amountPaid;
//     }
//     return this.amountPaid;
//   },
// };

// const guestTwo = {
//   name: "Peller",
//   nightSpent: 5,
//   isVip: false,
//   amountToPay: function () {
//     const pricePerNight = 50;
//     const discountLevel1 = 0.2;
//     const discountLevel2 = 0.1;
//     this.amountPaid = this.nightSpent * pricePerNight;
//     if (this.nightSpent > 7 && this.isVip === true) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel1;
//     } else if (this.nightSpent > 7 && this.isVip === false) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel2;
//     } else {
//       this.amountPaid = this.amountPaid;
//     }
//     return this.amountPaid;
//   },
// };

// const guestThree = {
//   name: "GehGeh",
//   nightSpent: 10,
//   isVip: true,
//   amountToPay: function () {
//     const pricePerNight = 50;
//     const discountLevel1 = 0.2;
//     const discountLevel2 = 0.1;
//     this.amountPaid = this.nightSpent * pricePerNight;
//     if (this.nightSpent > 7 && this.isVip === true) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel1;
//     } else if (this.nightSpent > 7 && this.isVip === false) {
//       this.amountPaid = this.amountPaid - this.amountPaid * discountLevel2;
//     } else {
//       this.amountPaid = this.amountPaid;
//     }
//     return this.amountPaid;
//   },
// };
// guestTwo.amountToPay();
// console.log(
//   `For our second guest we have ${guestTwo.name}, he spent ${
//     guestTwo.nightSpent
//   } nights, he is to pay ${guestTwo.amountToPay()}$`
// );

// Learnt a bit
// use function declaration for logic because of its hositing qualities
// use object to hold data
// call them to share function
// its all coming together
// i kept repeating the same method in each object data

// function declaration as the machine
function hotelBilling(nightSpent, isVip) {
  const pricePerNight = 50;
  const discountLevel1 = 0.2;
  const discountLevel2 = 0.1;
  let amountPaid = nightSpent * pricePerNight;
  if (nightSpent > 7 && isVip) {
    amountPaid = amountPaid - amountPaid * discountLevel1;
  } else if (nightSpent > 7 && !isVip) {
    amountPaid = amountPaid - amountPaid * discountLevel2;
  } else {
    amountPaid = amountPaid;
  }
  return amountPaid;
}

// load the data
const guestOne = {
  name: "MrEazi",
  nightSpent: 8,
  isVip: true,
};
const guestTwo = {
  name: "Peller",
  nightSpent: 5,
  isVip: false,
};
const guestThree = {
  name: "GehGeh",
  nightSpent: 10,
  isVip: true,
};

guestOne.amountPaid = hotelBilling(guestOne.nightSpent, guestOne.isVip);
guestTwo.amountPaid = hotelBilling(guestTwo.nightSpent, guestTwo.isVip);
guestThree.amountPaid = hotelBilling(guestThree.nightSpent, guestThree.isVip);

console.log(
  `${guestOne.name} spent ${guestOne.nightSpent} night and will pay $${guestOne.amountPaid}`
);
console.log(
  `${guestTwo.name} spent ${guestTwo.nightSpent} night and will pay $${guestTwo.amountPaid}`
);
console.log(
  `${guestThree.name} spent ${guestThree.nightSpent} night and will pay $${guestThree.amountPaid}`
);

// Problem 4: Exam Grading

// You are grading students:

// 90+ = "A"

// 70–89 = "B"

// 50–69 = "C"

// Below 50 = "F"

// You’re given 5 students with name and score.

// 👉 Write a function to calculate each student’s grade

//  and print their results.
const examGradingSystem = function (scores) {
  let grading;
  if (scores >= 90) {
    grading = "A";
  } else if (scores >= 70 && scores <= 89) {
    grading = "B";
  } else if (scores >= 50 && scores <= 69) {
    grading = "C";
  } else {
    grading = "F";
  }
  return grading;
};

const studentOne = {
  name: "James",
  Score: 45,
};
const studentTwo = {
  name: "Michael",
  Score: 54,
};
const studentThree = {
  name: "John",
  Score: 72,
};
const studentFour = {
  name: "Williams",
  Score: 97,
};
const studentFive = {
  name: "Thomas",
  Score: 38,
};

studentOne.grading = examGradingSystem(studentOne.Score);
studentTwo.grading = examGradingSystem(studentTwo.Score);
studentThree.grading = examGradingSystem(studentThree.Score);
studentFour.grading = examGradingSystem(studentFour.Score);
studentFive.grading = examGradingSystem(studentFive.Score);

console.log(
  `${studentFour.name} scored ${studentFour.Score} ➡️ His Grade is : ${studentFour.grading}`
);

// Problem 3: Delivery Service

// A delivery company charges $5 per km.

// If the distance is more than 50 km, they reduce the price per km to $4.

// If the package is marked isFragile, they add an extra $20 handling fee.

// You’re given 3 orders with their customerName, distance,
// and isFragile.
// 👉 Write a function that calculates the total delivery fee.

function deliveryService(distance, isFragile) {
  let deliveryPricePer = 5;
  const handlingFee = 20;
  let deliveryCharges;
  if (distance > 50 && isFragile) {
    deliveryPricePer = 4;
    deliveryCharges = deliveryPricePer * distance + handlingFee;
    return `${deliveryCharges}`;
  } else if (distance > 50 && !isFragile) {
    deliveryPricePer = 4;
    deliveryCharges = deliveryPricePer * distance;
    return `${deliveryCharges}`;
  } else {
    deliveryCharges = deliveryPricePer * distance;
    return `${deliveryCharges}`;
  }
}

const orderOne = {
  customerName: "John Robert",
  distance: 56,
  isFragile: true,
  itemsToDrop: ["glasses", "Laboratoy Equipment", "Tiles"],
  deliverTo: "Ibadan",
};
const orderTwo = {
  customerName: "Williams Richard",
  distance: 49,
  isFragile: false,
  itemsToDrop: ["bags", "leather", "nylon"],
  deliverTo: "Amoyo",
};
const orderThree = {
  customerName: "Judexify",
  distance: 66,
  isFragile: true,
  itemsToDrop: ["Samsung S22 Ultra", "Samsung Screen"],
  deliverTo: "abuja",
};

orderOne.deliveryCharges = deliveryService(
  orderOne.distance,
  orderOne.isFragile
);
orderTwo.deliveryCharges = deliveryService(
  orderTwo.distance,
  orderTwo.isFragile
);
orderThree.deliveryCharges = deliveryService(
  orderThree.distance,
  orderThree.isFragile
);

console.log(`${orderThree.customerName} wants to send ${orderThree.itemsToDrop}
  to ${orderThree.deliverTo} and his fees is $${orderThree.deliveryCharges}`);

console.log(`${orderTwo.customerName} wants to send ${orderTwo.itemsToDrop}
  to ${orderTwo.deliverTo} and his fees is $${orderTwo.deliveryCharges}`);
