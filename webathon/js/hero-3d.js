document.addEventListener("DOMContentLoaded", () => {

const hero = document.querySelector("#hero");
const laptop = document.querySelector(".hero-laptop");

if(!hero || !laptop) return;

hero.addEventListener("mousemove",(e)=>{

const rect = hero.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 25;
const rotateY = (centerX - x) / 25;

laptop.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

hero.addEventListener("mouseleave",()=>{

laptop.style.transform =
"rotateX(0deg) rotateY(0deg)";

});

});