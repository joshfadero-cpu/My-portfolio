// ============================================
// PORTFOLIO ENHANCEMENTS v2.1 (Cleaned)
// ============================================

// Check if we're on a mobile device
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ) || window.matchMedia("(hover: none) and (pointer: coarse)").matches;

// ============================================
// ENHANCEMENT 1: ANIMATED LETTER ENTRY
// ============================================

function initAnimatedLetters() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = heroTitle.textContent;
  heroTitle.innerHTML = text
    .split("")
    .map((char) => (char === " " ? " " : `<span class="letter">${char}</span>`))
    .join("");

  const letters = heroTitle.querySelectorAll(".letter");
  gsap.from(letters, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.03,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.2,
  });
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnimatedLetters);
} else {
  initAnimatedLetters();
}

// ============================================
// ENHANCEMENT 2: MAGNETIC CARD EFFECT
// ============================================

if (!isMobile) {
  document.querySelectorAll(".video-card").forEach((card) => {
    const videoInfo = card.querySelector(".video-info");
    if (!videoInfo) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(videoInfo, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(videoInfo, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// ============================================
// ENHANCEMENT 3: ANIMATED BORDER DRAW
// ============================================

function addCardBorders() {
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((card) => {
    // Check if border already exists
    if (card.querySelector(".card-border")) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "card-border");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "none");

    // Add gradient definition
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient",
    );
    gradient.setAttribute(
      "id",
      `gradient-${Math.random().toString(36).substr(2, 9)}`,
    );
    gradient.setAttribute("x1", "0%");
    gradient.setAttribute("y1", "0%");
    gradient.setAttribute("x2", "100%");
    gradient.setAttribute("y2", "100%");

    const stop1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop",
    );
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#2563eb");
    const stop2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "stop",
    );
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#ec4899");

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "1");
    rect.setAttribute("y", "1");
    rect.setAttribute("width", "98");
    rect.setAttribute("height", "98");
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", `url(#${gradient.id})`);
    rect.setAttribute("stroke-width", "0.5");

    svg.appendChild(rect);
    card.appendChild(svg);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addCardBorders);
} else {
  addCardBorders();
}

// ============================================
// ENHANCEMENT 4: TEXT SCRAMBLE EFFECT
// ============================================

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// Apply text scramble to section titles
if (typeof ScrollTrigger !== "undefined") {
  document.querySelectorAll(".section-title").forEach((title) => {
    const fx = new TextScramble(title);
    const originalText = title.textContent;

    ScrollTrigger.create({
      trigger: title,
      start: "top 80%",
      once: true,
      onEnter: () => {
        fx.setText(originalText);
      },
    });
  });
}

// ============================================
// ENHANCEMENT 5: STAGGERED ENTRY ANIMATIONS
// ============================================

if (typeof ScrollTrigger !== "undefined") {
  gsap.utils.toArray(".video-card").forEach((card, index) => {
    const direction = index % 3 === 0 ? -100 : index % 3 === 1 ? 100 : 0;
    const yDirection = index % 3 === 2 ? 100 : 0;

    gsap.from(card, {
      x: direction,
      y: yDirection,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

// ============================================
// ENHANCEMENT 6: SECTION BACKGROUND TRANSITIONS
// ============================================

if (typeof ScrollTrigger !== "undefined") {
  const sections = gsap.utils.toArray("section");
  const colors = ["#0a0a0a", "#0f0a1a", "#110a1d", "#0a0a0a"];

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: colors[index % colors.length] || colors[0],
          duration: 0.8,
          ease: "power2.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: colors[index % colors.length] || colors[0],
          duration: 0.8,
          ease: "power2.inOut",
        });
      },
    });
  });
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Disable heavy features on mobile
if (isMobile) {
  // Disable mouse glow
  const mouseGlow = document.getElementById("mouse-glow");
  if (mouseGlow) {
    mouseGlow.style.display = "none";
  }
}

// Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
if (prefersReducedMotion.matches) {
  if (typeof gsap !== "undefined") {
    gsap.globalTimeline.timeScale(0);
  }
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
  }
}
