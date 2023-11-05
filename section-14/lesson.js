// // var myName = prompt("What is your name?");
// var message = prompt("Write a tweet:");
// // var message = "Teach the world online. Create an online video course, reach students across the globe, and earn money";
// var maxChar = 50;
// // var charLeft = maxChar - message.length;

// // console.log("You have written " + message.length + " characters. You still have " + charLeft + " characters left.");
// // alert("You have written " + message.length + " characters. You still have " + charLeft + " characters left.");
// // console.log(message.slice(0, maxChar));
// alert(message.slice(0, maxChar));

// var name = prompt("What is your name?").toLowerCase();
// var firstLetter = name.slice(0,1).toUpperCase();
// name = name.slice(1, name.length);
// alert("Hello " + firstLetter + name);

// var dogAge = prompt("How old is your dog?");
// var humanAge = (dogAge - 2) * 4 + 21;
// alert("My dog is " + humanAge + " yrs old in human age.");

function getMilk(money) {
    var milkPrice = 1.5;
    var milkBottles = money / milkPrice
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("Bought " + Math.floor(milkBottles) + " bottles of milk.")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}
getMilk(10)