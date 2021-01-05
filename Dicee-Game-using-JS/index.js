var randommnumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomdiceimg = "images/dice" + randommnumber1 + ".png"; // generating img name by using variable

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomdiceimg);

var randommnumber2 = Math.floor(Math.random() * 6) + 1; //1-6
var randomdiceimg2 = "images/dice" + randommnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomdiceimg2);

if (randommnumber1 > randommnumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!😌";
} else if (randommnumber2 > randommnumber1) {
  document.querySelector("h1").innerHTML = "😌Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw🤝!";
}
