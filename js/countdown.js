const eventDate = new Date("March 13, 2026 09:30:00").getTime()

function updateFlip(id,value){

const front = document.querySelector(`#${id}`)
const flip = document.querySelector(`#${id}-flip`)

if(front.innerText != value){

flip.classList.add("flip")

setTimeout(()=>{

front.innerText = value
flip.classList.remove("flip")

},300)

}

}

function updateCountdown(){

const now = new Date().getTime()

const distance = eventDate - now

const days = Math.floor(distance / (1000 * 60 * 60 * 24))
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((distance % (1000 * 60)) / 1000)

updateFlip("days",days)
updateFlip("hours",hours)
updateFlip("minutes",minutes)
updateFlip("seconds",seconds)

/* progress bar */

const start = new Date("May 1, 2026").getTime()

const total = eventDate - start

const progress = ((now-start)/total)*100

document.getElementById("progress-bar").style.width = progress + "%"

}

setInterval(updateCountdown,1000)

updateCountdown()