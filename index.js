

var randomNumber1 = Math.floor(Math.random()*6) + 1;


if(randomNumber1 == 1){

  document.getElementById('img1').src = "images/dice1.png";
}


if(randomNumber1 == 2){

  document.getElementById('img1').src = "images/dice2.png";
}

if(randomNumber1 == 3){

  document.getElementById('img1').src = "images/dice3.png";
}
if(randomNumber1 == 4){

  document.getElementById('img1').src = "images/dice4.png";
}
if(randomNumber1 == 5){

  document.getElementById('img1').src = "images/dice5.png";
}

if(randomNumber1 == 6){

  document.getElementById('img1').src = "images/dice6.png";
}


var randomNumber2 = Math.floor(Math.random()*6) + 1;


if(randomNumber2 == 1){

  document.getElementById('img2').src = "images/dice1.png";
}


if(randomNumber2 == 2){

  document.getElementById('img2').src = "images/dice2.png";
}

if(randomNumber2 == 3){

  document.getElementById('img2').src = "images/dice3.png";
}
if(randomNumber2 == 4){

  document.getElementById('img2').src = "images/dice4.png";
}
if(randomNumber2 == 5){

  document.getElementById('img2').src = "images/dice5.png";
}

if(randomNumber2 == 6){

  document.getElementById('img2').src = "images/dice6.png";
}


if(randomNumber1 == randomNumber2){

  document.getElementById('title_').innerHTML = "ITS A DRAW!";
}

else if(randomNumber1 > randomNumber2){

  document.getElementById('title_').innerHTML = "Player 1 WINS!";
}

else if(randomNumber1 < randomNumber2){

  document.getElementById('title_').innerHTML = "Player 2 WINS!";
}


console.log(randomNumber1);
