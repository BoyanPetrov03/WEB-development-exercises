var randomNumer1 = (Math.floor((Math.random() * 6) + 1));
console.log(randomNumer1);

var randomNumer2 = (Math.floor((Math.random() * 6) + 1));
console.log(randomNumer2);

var results = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var diceResult1 = results[randomNumer1 - 1];
var diceResult2 = results[randomNumer2 - 1];

document.getElementsByTagName("img")[0].setAttribute("src", diceResult1);
document.getElementsByTagName("img")[1].setAttribute("src", diceResult2);

if(randomNumer1 > randomNumer2) {
  document.querySelector("h1").textContent = "🏆 Player 1 wins!";
}
else if (randomNumer1 < randomNumer2) {
  document.querySelector("h1").textContent = "Player 2 wins! 🏆";
}
else {
  document.querySelector("h1").textContent = "💪 Equal 💪";
}
