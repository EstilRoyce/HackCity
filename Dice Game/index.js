let randomNumber1=Math.ceil(Math.random()*6)
console.log(randomNumber1)
let randomDiceImage="dice"+ randomNumber1 + ".png"

let randomImageSource="images/" + randomDiceImage

let image1=document.querySelectorAll("img")[0] 

image1.setAttribute("src",randomImageSource);


let randomNumber2=Math.ceil(Math.random()*6)
console.log(randomNumber2)
let randomDiceImage2="images/dice"+ randomNumber2 + ".png"
let image2=document.querySelectorAll("img")[1]

image2.setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1")
.innerHTML="&#x1f6a9Player1 Wins"}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1")
.innerHTML="Player2Wins&#x1f6a9"}

else{document.querySelector("h1").innerHTML="Draw!"}


