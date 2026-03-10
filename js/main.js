/* ===============================
SCROLL REVEAL ANIMATION
=============================== */

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);


/* =========================
   GLITCH LETTER SHUFFLE
========================= */

const text = "WEBATHON";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let iteration = 0;

const glitch = setInterval(() => {

document.getElementById("glitch-text").innerText =
text
.split("")
.map((letter, index) => {

if(index < iteration){
return text[index];
}

return letters[Math.floor(Math.random()*letters.length)];

})
.join("");

if(iteration >= text.length){
clearInterval(glitch);
}

iteration += 0.5;

},80);

/* LOADER PERCENTAGE */

let percent=0;

const percentText=document.querySelector(".loader-percent");

const loaderFill=document.querySelector(".loader-fill");

const interval=setInterval(function(){

percent++;

percentText.innerText=percent+"%";

loaderFill.style.width=percent+"%";

if(percent>=100){

clearInterval(interval);

setTimeout(function(){

const loader=document.getElementById("loading-screen");

loader.style.opacity="0";

loader.style.transition="opacity 0.6s";

setTimeout(function(){

loader.style.display="none";

},600);

},300);

}

},20);


/* ===============================
   HERO ANIMATIONS (GSAP)
================================ */

gsap.from(".hero-title",{
y:60,
opacity:0,
duration:1
})

gsap.from(".hero-laptop",{
y:80,
scale:0.85,
opacity:0,
duration:1.4,
delay:0.4,
ease:"power3.out"
})


/* ===============================
   SCROLL PROGRESS BAR & NAVBAR EFFECT
================================ */

window.addEventListener("scroll", function(){

const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

document.getElementById("scroll-progress").style.width = progress + "%";

const navbar = document.getElementById("navbar");

if(window.scrollY > 80){
navbar.style.background = "rgba(0,0,0,0.95)";
navbar.style.padding = "8px 0";
}else{
navbar.style.background = "rgba(0,0,0,0.8)";
}

revealSections();

});


/* ===============================
   SECTION REVEAL ON SCROLL
================================ */

const sections = document.querySelectorAll("section");

function revealSections(){

const triggerBottom = window.innerHeight * 0.85;

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < triggerBottom){

section.classList.add("visible");

}

});

}

window.addEventListener("scroll", revealSections);


/* ===============================
   SMOOTH MENU NAVIGATION
================================ */

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});

/* =========================
   CURSOR SYSTEM
========================= */

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

/* MOUSE MOVE */

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

dot.style.left = mouseX + "px";
dot.style.top = mouseY + "px";

/* PARTICLE TRAIL */

if(Math.random() < 0.2){

const particle = document.createElement("div");
particle.classList.add("cursor-particle");

particle.style.left = mouseX + "px";
particle.style.top = mouseY + "px";

document.body.appendChild(particle);

setTimeout(()=>{
particle.remove();
},600);

}

});

/* SMOOTH RING FOLLOW */

function animateRing(){

ringX += (mouseX - ringX) * 0.15;
ringY += (mouseY - ringY) * 0.15;

ring.style.left = ringX + "px";
ring.style.top = ringY + "px";

requestAnimationFrame(animateRing);

}

animateRing();

/* HOVER MAGNETIC EFFECT */

const interactive = document.querySelectorAll("a, button");

interactive.forEach(el=>{

el.addEventListener("mouseenter",()=>{
ring.classList.add("cursor-hover");
});

el.addEventListener("mouseleave",()=>{
ring.classList.remove("cursor-hover");
});

});

/* CLICK RIPPLE */

document.addEventListener("click",(e)=>{

const ripple = document.createElement("div");
ripple.classList.add("cursor-ripple");

ripple.style.left = e.clientX + "px";
ripple.style.top = e.clientY + "px";

document.body.appendChild(ripple);

setTimeout(()=>{
ripple.remove();
},500);

});

/* TRIGGER REVEAL ON INITIAL LOAD */
revealSections();



const codeText = `
<html>
<body>

<h1>WEBATHON 2026</h1>

<button>Register</button>

</body>
</html>
`;

let i = 0;

function typeCode(){

if(i < codeText.length){

document.getElementById("typing-code")
.innerHTML += codeText.charAt(i);

i++;

setTimeout(typeCode,40);

}

}

typeCode();

/* =================================
 SMOOTH SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})


/* =================================
 HERO LOAD ANIMATION
================================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded")

})

