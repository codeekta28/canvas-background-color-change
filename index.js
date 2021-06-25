console.log("This is index.js file");
document.querySelector(".btn").addEventListener("click",(e)=>{
 let canvas = document.querySelector("canvas");
 let colorChange = Math.floor(Math.random()*16777215).toString(16);
 canvas.style.backgroundColor = `#${colorChange}`;
})