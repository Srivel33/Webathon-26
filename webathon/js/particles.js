document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById("particles");

if(!container) return;

function createParticle(){

const p = document.createElement("div");
p.classList.add("particle");

const size = Math.random()*6 + 1;

p.style.width = size + "px";
p.style.height = size + "px";

p.style.left = Math.random()*window.innerWidth + "px";

const duration = Math.random()*8 + 6;

p.style.animationDuration = duration + "s";

container.appendChild(p);

setTimeout(()=>{

p.remove();

}, duration*1000);

}

setInterval(createParticle,200);

});