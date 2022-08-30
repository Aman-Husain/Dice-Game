//For Player 2
var randomNumber1 = Math.floor(Math.random()*6)+1; //random number 1 to 6

var randomDiceImage1 = "dice"+randomNumber1+".jpg"; //"dice6.png"

var randomImageSource1 = "Assets/"+randomDiceImage1;  //"assets/dice6.png"

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);



//For Player1

var randomNumber2 = Math.floor(Math.random()*6)+1; //random number 1 to 6

var randomDiceImage2 = "dice"+randomNumber2+".jpg"; //"dice6.png"

var randomImageSource2 = "Assets/"+randomDiceImage2;  //"assets/dice6.png"

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);



//Logic For Winner
if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML = "😇 Player 1 Win" +  " " +"Player 2 Loss! 😢"; 
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "😢 Player 1 Loss" +  " " +"Player 2 Wins! 😇"; 
}
else
{
    document.querySelector("h1").innerHTML = "Draw 🤝";
}