var num1=Math.ceil(Math.random()*10);
var num2=Math.ceil(Math.random()*10);

var displayH=document.getElementById("quetion");

displayH.innerText=`What is ${num1} multiply by ${num2}?`

var correctAns=num1*num2;

var scoreH=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreH.innerText=`Score:${score}`
var inputH=document.getElementById("input");

var formH=document.getElementById("form");

formH.addEventListener("submit",()=>{
    var userAns= +inputH.value
    if(userAns===correctAns){
        score++;
        keep()
    }
    else{
        score--;
        keep()
    }
});

function keep(){
   localStorage.setItem("score", JSON.stringify(score))
}