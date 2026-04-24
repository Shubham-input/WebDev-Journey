var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImg1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImg1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2){
    document.querySelector("div h1").textContent = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("div h1").textContent = "Player 2 Wins";
} else {
    document.querySelector("div h1").textContent = "It's a Draw";
}