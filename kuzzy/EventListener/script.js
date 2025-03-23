let boxColor = document.querySelector(".box");
let userText =document.querySelector("#userText");
let demo = document.querySelector(".demo");


demo.addEventListener("click", hello );

function hello(){
    boxColor.style.backgroundColor = "green";
}