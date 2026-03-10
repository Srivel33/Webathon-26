/* ===============================
CUSTOM CURSOR SYSTEM
================================ */

const cursor = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

/* Track mouse */

document.addEventListener("mousemove", (e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

if(cursor){
cursor.style.left = mouseX + "px";
cursor.style.top = mouseY + "px";
}

/* Laptop tilt */

const laptop = document.querySelector(".hero-laptop");

if(laptop){

const x = (window.innerWidth/2 - mouseX) / 40;
const y = (window.innerHeight/2 - mouseY) / 40;

laptop.style.transform =
`rotateY(${x}deg) rotateX(${y}deg)`;

}

});

/* Smooth ring follow */

function animateCursor(){

ringX += (mouseX - ringX) * 0.15;
ringY += (mouseY - ringY) * 0.15;

if(cursorRing){
cursorRing.style.left = ringX + "px";
cursorRing.style.top = ringY + "px";
}

requestAnimationFrame(animateCursor);

}

animateCursor();

/* Hover effect */

const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach(el=>{

el.addEventListener("mouseenter",()=>{

if(cursorRing){
cursorRing.style.transform="scale(2)";
cursorRing.style.borderColor="#FFD600";
cursorRing.style.boxShadow="0 0 20px #FFD600";
}

if(cursor){
cursor.style.transform="scale(1.4)";
}

});

el.addEventListener("mouseleave",()=>{

if(cursorRing){
cursorRing.style.transform="scale(1)";
cursorRing.style.borderColor="rgba(255,214,0,0.8)";
cursorRing.style.boxShadow="none";
}

if(cursor){
cursor.style.transform="scale(1)";
}

});

});

/* Click animation */

document.addEventListener("mousedown", ()=>{
if(cursor) cursor.style.transform="scale(0.7)";
});

document.addEventListener("mouseup", ()=>{
if(cursor) cursor.style.transform="scale(1)";
});