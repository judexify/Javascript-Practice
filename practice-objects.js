"use strict";
// used for describing things
const aboutJudex = {
  firstName: "Jude",
  lastName: "OLuwadunsi",
  Age: 2025 - 2025,
  friends: ["jude", "judex", "judexify"],
};
console.log(aboutJudex);
// dot notation which is a declaration
console.log(aboutJudex.lastName);
// bracket notation is an expression which allows for
// computation of value
console.log(aboutJudex["lastName"]);

const nameKey = "Name";
console.log(aboutJudex["first" + nameKey]);
console.log(aboutJudex["last" + nameKey]);
const interestedIn = prompt("What do you want to know about me?");
console.log(aboutJudex[interestedIn]);

// i noticed that while trying to get the infomation from Age
// went through but was undefined for age why?
// object data are case sensitive
