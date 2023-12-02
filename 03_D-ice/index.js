var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".dice img")[0].src = randomImageSource1;
document.querySelectorAll(".dice img")[1].src = randomImageSource2;

var resultMessage;
if (randomNumber1 > randomNumber2) {
  resultMessage = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  resultMessage = "Player 2 Wins! 🚩";
} else {
  resultMessage = "Draw!";
}

document.querySelector("h1").innerHTML = resultMessage;
