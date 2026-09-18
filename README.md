<div align="center">

  # ⚡ Webathon '26 | Interactive Event Landing Page

  <p align="center">
    <strong>A high-performance, dark-mode event portal crafted with vanilla web technologies, dynamic GSAP animations, 3D mouse parallax, and an interactive particle canvas.</strong>
  </p>

  <p align="center">
    <a href="https://webathon-26.netlify.app/">
      <img src="https://img.shields.io/badge/Live_Demo-webathon--26.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES6+" />
    <img src="https://img.shields.io/badge/Animation-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  </p>

  <p align="center">
    <a href="https://webathon-26.netlify.app/"><strong>Explore the Live Site »</strong></a>
    <br />
    <br />
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-architecture">Project Structure</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-author">Author</a>
  </p>

</div>

---

## 📖 Overview

**Webathon '26** is a modern, responsive web application built from scratch to serve as the flagship landing page for a collegiate hackathon at **TEXPERIA '26**.

The goal was to deliver an immersive, cyberpunk-inspired visual experience while maintaining **zero build overhead**, fast load times, and fluid 60 FPS animations across desktop and mobile devices.

### 🌟 Live Preview
👉 **[webathon-26.netlify.app](https://webathon-26.netlify.app/)**

---

## ✨ Key Features

- **🎮 Interactive 3D Hero Parallax**  
  Mouse-movement tracking calculations deliver realistic 3D perspective tilts on the hero element, giving depth to the visual display.
- **🎯 Custom Magnetic Cursor System**  
  Dual-element custom cursor (dot + trailing ring) featuring smooth linear interpolation (lerp), magnetic link snapping, and click ripples.
- **✨ Ambient Particle Engine**  
  Lightweight HTML5 Canvas particle simulation creating gentle floating energy nodes across the background without dropping frame rates.
- **⏳ 3D Flip Countdown Timer**  
  Custom dynamic countdown timer with realistic card-flip transitions and real-time progress calculations.
- **⚡ Cyberpunk Glitch Preloader**  
  Interactive entry screen with random text-scramble glyphs and a synchronized progress bar ensuring all assets load seamlessly.
- **📜 Smooth Scroll & Reveal Triggers**  
  Hardware-accelerated viewport reveals powered by local **GSAP** and CSS keyframes.
- **📱 100% Fluid Responsive Layout**  
  Modular CSS architecture tested and optimized for ultra-wide monitors, laptops, tablets, and smartphones.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic tags, SEO meta attributes, and Open Graph card data |
| **Styling** | Vanilla CSS3 | Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism |
| **Interactivity** | JavaScript (ES6+) | Vanilla script modules for particles, cursor tracking, and timer |
| **Motion & FX** | GSAP (GreenSock) | Physics-driven stagger animations and hero entrance sequences |
| **Hosting** | Netlify | Global CDN deployment with continuous deployment from GitHub |

---

## 📁 Project Architecture

```plaintext
webathon-26/
├── assets/
│   ├── images/             # Visual banners, venue photos & mockups
│   ├── logos/              # Brand and event badges
│   └── pdf/                # Supplementary documents
├── css/
│   ├── style.css           # Core design system, variables & component styles
│   ├── animations.css      # Reusable keyframe animations & reveal states
│   └── responsive.css      # Comprehensive responsive breakpoints
├── js/
│   ├── main.js             # Asset preloader & GSAP entrance orchestration
│   ├── countdown.js        # Card-flip math & interval countdown logic
│   ├── cursor.js           # Mouse vector tracking & magnetic ring physics
│   ├── particles.js        # Canvas particle render loop
│   └── hero-3d.js          # Mouse-driven 3D perspective matrix transform
├── libs/
│   └── gsap.js             # Locally packaged GSAP animation engine
├── index.html              # Main single-page application entry point
├── LICENSE                 # Open-source MIT License
└── README.md               # Project documentation
```

---

## 🚀 Quick Start

Because this project uses vanilla web standards, you do not need Node.js, npm, or any build configuration to run it locally.

### 1. Clone the repository
```bash
git clone https://github.com/Srivel33/Webathon-26.git
```

### 2. Open the project
You can launch it instantly:
- **Direct file access:** Open `index.html` in Chrome, Firefox, Safari, or Edge.
- **VS Code Live Server:** Right-click `index.html` and select **"Open with Live Server"**.
- **Python one-liner:**
  ```bash
  # Inside the project folder:
  python -m http.server 3000
  ```
  Then visit `http://localhost:3000` in your browser.

---

## 🎨 Design System

- **Color Palette:** Deep Midnight Black (`#0b0d17`), Cyber Neon Yellow (`#ffd600`), and Electric Aqua (`#00c7b7`)
- **Typography:** [Poppins](https://fonts.google.com/specimen/Poppins) (Body/UI) & [Montserrat](https://fonts.google.com/specimen/Montserrat) (Headings & Badges)
- **UI Treatment:** Subtle glowing borders, frosted glass blur (`backdrop-filter`), and high-contrast accessibility

---

## 👤 Author

**Srivel**  
- **GitHub:** [@Srivel33](https://github.com/Srivel33)
- **Project Role:** Lead Frontend Designer & Developer

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.
