console.log("This is index.js file");
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.font = "10px Arial";
context.fillText("My Background color will change when button below is clicked", 10,70);
document.querySelector(".btn").addEventListener("click",(e)=>{
 let colorChange = Math.floor(Math.random()*16777215).toString(16);
 canvas.style.backgroundColor = `#${colorChange}`;
})