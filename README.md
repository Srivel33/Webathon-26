# WEBATHON 2026

> **AI-Powered Web Design Challenge** — TEXPERIA'26 | SNS College of Technology

![Live Demo](https://img.shields.io/badge/Live%20Demo-webathon--26.netlify.app-00C7B7?style=flat-square&logo=netlify&logoColor=white)

🌐 **Live Website:** [https://webathon-26.netlify.app/](https://webathon-26.netlify.app/)

---

## About

**WEBATHON** is an AI-powered web design hackathon hosted as part of **TEXPERIA 2026**, the annual technical fest of the **Department of AIML & IT** at **SNS College of Technology, Coimbatore**.

This repository contains the static front-end website created for the event. Teams competed to design and build innovative, responsive websites using modern web technologies and AI-assisted development tools.

---

## Tech Stack

This is a **static front-end website** with no build tools or dependencies required.

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS3 (Custom Properties, Grid, Flexbox) |
| Animations | CSS Keyframes + GSAP (local) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Poppins, Montserrat) |

---

## Project Structure

```
webathon/
├── index.html              # Main HTML page (single-page layout)
├── css/
│   ├── style.css           # Core design system & component styles
│   ├── animations.css      # Keyframe animations & reveal effects
│   └── responsive.css      # Media queries (1024px, 768px, 480px)
├── js/
│   ├── main.js             # Loader, scroll reveal, GSAP hero animations
│   ├── countdown.js        # Flip countdown timer with progress bar
│   ├── cursor.js           # Custom cursor dot + ring system
│   ├── particles.js        # Floating background particle effect
│   └── hero-3d.js          # Mouse-driven 3D laptop tilt on hero section
├── libs/
│   └── gsap.js             # GSAP animation library (local copy)
└── assets/
    ├── images/
    │   ├── laptop.png      # Hero section laptop illustration
    │   └── venue.jpg       # DT Playhouse venue photo
    ├── logos/
    │   └── sns-logo.png    # SNS College of Technology logo
```

---

## Features

- **Animated Loader** — Glitch text shuffle + striped progress bar with live percentage
- **Custom Cursor** — Dot + ring cursor with hover magnetic effect and click ripple
- **Particle Background** — Floating yellow particles throughout the page
- **Hero 3D Effect** — Laptop image tilts in 3D following mouse position
- **Flip Countdown** — 3D card flip countdown to event date with progress bar
- **Scroll Reveal** — Sections and elements animate in on scroll
- **Responsive Design** — Fully mobile-responsive across all screen sizes

---

## Getting Started

### Live Deployment

Access the live hosted site directly:
👉 **[https://webathon-26.netlify.app/](https://webathon-26.netlify.app/)**

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Srivel33/Webathon-26.git

# Open in browser
# Open index.html directly in Chrome / Firefox / Edge
```

Or use the **Live Server** extension in VS Code:
1. Right-click index.html
2. Select **"Open with Live Server"**

---

## License

© 2026 SNS College of Technology — All Rights Reserved.
