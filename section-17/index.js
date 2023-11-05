// generate random numbers for the players' dice
var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);

// get the corresponding images and set the src for every image
var img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", "./images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNum2 + ".png");

// get the result and display who won
if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}