//your JS code here. If required.

let x= document.getElementById("x");
let y= document.getElementById("y");
x.innerText = window.innerWidth;
y.innerText = window.innerHeight;


// h1.textHTML =Width: x and Height: y

window.addEventListener("resize" , ()=>{
  x.innerText = window.innerWidth;
  y.innerText = window.innerHeight;
})