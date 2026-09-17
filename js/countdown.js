/* ===============================
   FLIP COUNTDOWN
================================ */

const eventDate = new Date("March 13, 2026 09:30:00").getTime();

/* Event announced date — must be before event date */
const startDate = new Date("January 1, 2026 00:00:00").getTime();

/* Zero-pad single digit numbers */
function pad(n){
  return String(Math.max(0, n)).padStart(2, "0");
}

function updateFlip(id, value){
  const front = document.querySelector("#" + id);
  const flip  = document.querySelector("#" + id + "-flip");

  if(!front || !flip) return;

  const padded = pad(value);

  if(front.innerText !== padded){
    flip.classList.add("flip");
    setTimeout(() => {
      front.innerText = padded;
      flip.classList.remove("flip");
    }, 300);
  }
}

function updateCountdown(){
  const now      = Date.now();
  const distance = eventDate - now;

  /* Countdown ended */
  if(distance <= 0){
    const title = document.querySelector(".countdown-title");
    if(title) title.innerText = "Event is Live!";
    updateFlip("days",    0);
    updateFlip("hours",   0);
    updateFlip("minutes", 0);
    updateFlip("seconds", 0);
    const bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = "100%";
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateFlip("days",    days);
  updateFlip("hours",   hours);
  updateFlip("minutes", minutes);
  updateFlip("seconds", seconds);

  /* Progress bar — percentage of time elapsed from start to event */
  const total    = eventDate - startDate;
  const elapsed  = now - startDate;
  const progress = Math.min(100, Math.max(0, (elapsed / total) * 100));

  const bar = document.getElementById("progress-bar");
  if(bar) bar.style.width = progress + "%";
}

setInterval(updateCountdown, 1000);
updateCountdown();