console.log("Um... Where are we?");

const birthYear = 1207;

let myName = "Bees?"
console.log(myName, "was born", birthYear)
myName = "There's a B?";
// birthYear=1208
// constant variables cannot change value
console.warn(myName, "May have consumed the souls of the damned");

console.log("myName is", myName.length, "characters long.");

console.log("myName includes b", myName.toUpperCase().includes("B"));

myName = "Bees";

console.log("myName has uppercase:", myName !== myName.toLowerCase());
console.log("myName has lowercase:", myName !== myName.toUpperCase());

const PI = 3.141592653589;

console.log(PI.toFixed(2));

// Get a random number between 1-100

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("random number:", randomNumber);