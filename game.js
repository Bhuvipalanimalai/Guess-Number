var randomNumber= Math.round(Math.random()*100);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
var lives=document.getElementById("lives");
var msg;

submitButton.onclick = () => {
    let inputNumber=document.getElementById("number-input").value;
    lives--;
    if(inputNumber==randomNumber)
    {
       location.href=="win.html" 
    }
    else if(inputNumber>randomNumber){
        msg="Oops! You Guess is high";
    }
    else if(inputNumber<randomNumber){
        msg="Oops! You Guess is low";
    }
     else if(lives==0)
     {
        location.href="lose.html"
    }
    message.style.display="inherit";
    message.innerHTML=msg;
    lives.innerHTML=lives;
const startButton=document.getElementById("reset");
startButton.onclick = () => {
    location.href="./index.htlm";
}
}