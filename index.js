// Angela's Method
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6//

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll('img')[0];


image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// h1 change
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if ( randomNumber1 < randomNumber2 ) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!";
} 



// window.onload = choosePics;

// My Method
// window.onload = choosePic;

// let randPics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// function choosePic() {
//     let randomNumber1 = Math.floor(Math.random() * randPics.length);
//     document.getElementById("img1").src = randPics[randomNumber1];
//     document.getElementById("img2").src = randPics[randomNumber1];
//     document.querySelector('h1').innerHTML = "Player 1 Wins";
// }

// choosePic();