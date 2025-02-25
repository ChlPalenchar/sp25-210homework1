console.log("cozy home");

console.log("2 + 7 =", 2 + 7);

console.log("'2' + '2' =", "2" + "2");

console.log("My name is " + "Bees")

console.log("2 + 2 = ", 2 + Number("2"));

if (true) {
    console.log("Always true");
} else {
    console.error("This should never happen");
}

let money = 0.75;

if(money >= .5) {
    console.log("you pay for a bus ticket");
    money -= 0.5;
} else if (money >= 0.25) {
    console.log("catch a ride with a ghost on a train");
    console.warn("sounds a little sketchy...");
    money -= 0.25;
} else {
    console.log("You're broke, walk home");
    console.warn("it's a 5 hour walk :(");
}