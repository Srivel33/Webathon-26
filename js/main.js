/* ===============================
   SCROLL REVEAL ANIMATION
=============================== */

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

const glitchTarget = document.getElementById("glitch-text");

if(glitchTarget){
  const text = "WEBATHON";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let iteration = 0;

  const glitch = setInterval(() => {
    glitchTarget.innerText = text
      .split("")
      .map((letter, index) => {
        if(index < iteration){
          return text[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if(iteration >= text.length){
      clearInterval(glitch);
    }

    iteration += 0.5;
  }, 80);
}


/* ===============================
   LOADER PERCENTAGE
================================ */

const percentText = document.querySelector(".loader-percent");
const loaderFill  = document.querySelector(".loader-fill");

if(percentText && loaderFill){
  let percent = 0;

  const loaderInterval = setInterval(function(){
    percent++;
    percentText.innerText = percent + "%";
    loaderFill.style.width = percent + "%";

    if(percent >= 100){
      clearInterval(loaderInterval);

      setTimeout(function(){
        const loader = document.getElementById("loading-screen");
        if(loader){
          loader.style.opacity = "0";
          loader.style.transition = "opacity 0.6s";
          setTimeout(function(){
            loader.style.display = "none";
          }, 600);
        }
      }, 300);
    }
  }, 20);
}


/* ===============================
   HERO ANIMATIONS (GSAP)
================================ */

if(typeof gsap !== "undefined"){
  gsap.from(".hero-title",{
    y:60,
    opacity:0,
    duration:1
  });

  gsap.from(".hero-laptop",{
    y:80,
    scale:0.85,
    opacity:0,
    duration:1.4,
    delay:0.4,
    ease:"power3.out"
  });
}


/* ===============================
   SCROLL PROGRESS BAR & NAVBAR
================================ */

const navbar = document.getElementById("navbar");

function onScroll(){
  const scrollTop    = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress     = (scrollTop / scrollHeight) * 100;

  document.getElementById("scroll-progress").style.width = progress + "%";

  if(navbar){
    if(window.scrollY > 80){
      navbar.style.background = "rgba(0,0,0,0.95)";
      navbar.style.padding    = "8px 0";
    } else {
      navbar.style.background = "rgba(0,0,0,0.85)";
      navbar.style.padding    = "";
    }
  }

  revealSections();
  revealOnScroll();
}

window.addEventListener("scroll", onScroll);


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

/* Trigger reveal on initial load */
window.addEventListener("load", () => {
  revealSections();
  revealOnScroll();
  document.body.classList.add("loaded");
});


/* =================================
   SMOOTH SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior:"smooth" });
    }
  });
});


/* =================================
   TYPING CODE ANIMATION
================================= */

const typingEl = document.getElementById("typing-code");

if(typingEl){
  const codeText = `<html>\n<body>\n\n<h1>WEBATHON 2026</h1>\n\n<button>Register</button>\n\n</body>\n</html>`;
  let i = 0;

  function typeCode(){
    if(i < codeText.length){
      typingEl.innerHTML += codeText.charAt(i);
      i++;
      setTimeout(typeCode, 40);
    }
  }

  typeCode();
}
