# Josh Fadero — Motion Designer Portfolio

A premium, interactive portfolio website showcasing motion design work with a distinct "Midnight Motion" aesthetic. Features advanced scroll animations, custom interactions, and a cinematic "Pure Black + Glass" design that stands out to recruiters and potential clients.

**Live Site:** [View Portfolio](https://joshfadero-cpu.github.io/portfolio-site) (when deployed)

---

## Features

### 🎨 Visual Design ("Midnight Motion")

- **Pure Black Theme** (`#000000`) for deep contrast
- **Electric Blue & Hot Pink** vibrants accents
- **Glassmorphism** with frosted glass cards and buttons
- **Cinematic Film Grain** texture overlay
- **Floating SVG Shapes** representing motion design primitives

### ✨ Interactive Elements

- **Lottie Animations** adding personality to Hero and Contact sections
- **Custom Cursor** with trail effect and context-aware states
- **Magnetic Video Cards** that respond to mouse movement
- **Animated SVG Borders** with gradient flows on hover
- **Text Scramble Effect** on section titles
- **3D Text Cycling** for dynamic storytelling

### 🎬 Motion & Animation

- **GSAP ScrollTrigger** animations throughout
- **Staggered Entry Animations** for portfolio cards
- **Parallax Backgrounds** for depth
- **Scroll Progress Indicator** at top of page

### 📱 Mobile Optimized

- Fully responsive design
- Heavy features disabled on touch devices for performance
- Touch-friendly interactions
- Optimized animations for mobile

---

## Quick Start

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/joshfadero-cpu/portfolio-site.git
   cd portfolio-site
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - No build process required!

3. **That's it!** The site uses CDN resources, so everything works out of the box.

### Deployment to GitHub Pages

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Update portfolio theme"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `main` branch, `/ (root)` folder
   - Click Save

3. **Wait 2-3 minutes** for deployment
   - Your site will be live at: `https://joshfadero-cpu.github.io/portfolio-site`

---

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript (ES6+)** - Core functionality
- **GSAP 3.12** - Animation library (via CDN)
- **ScrollTrigger** - GSAP plugin for scroll animations
- **LottieFiles** - Lightweight JSON animations

### Why This Stack?

- No build process needed
- Edit files directly, push to GitHub
- GitHub Pages compatible out-of-the-box
- Fast load times
- Easy to maintain

---

## 📁 Project Structure

```
portfolio-site/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles (Midnight Motion theme + responsive)
├── js/
│   ├── main.js             # Core functionality (cursor, text cycling, lazy loading)
│   ├── animations.js       # GSAP ScrollTrigger animations
│   └── enhancements.js     # v2.0 enhancements (borders, scramble, magnetic)
├── assets/
│   ├── images/
│   │   └── Frankenstein Finder 3 🧩.png
│   ├── loops/
│   │   ├── loop-1.webp
│   │   └── ...
│   └── lottie animations/
│       ├── Developer at work.json
│       └── Cat playing animation.json
└── README.md               # This file
```

---

## Customization

### Update Content

**Hero Section** (`index.html`):

- Edit hero title, subtitle, and description
- Modify text cycling words in `js/main.js`

**Portfolio Videos** (`index.html`):

- Replace YouTube video IDs in `data-src` attributes
- Update video titles and descriptions
- Modify categories

### Modify Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --bg-primary: #000000; /* Background */
  --accent-primary: #2563eb; /* Electric Blue */
  --accent-secondary: #ec4899; /* Hot Pink */
  /* ... more colors */
}
```

---

## Contact

- **Email:** joshfadero@gmail.com
- **LinkedIn:** [josh-x](https://www.linkedin.com/in/josh-x/)
- **GitHub:** [joshfadero-cpu](https://github.com/joshfadero-cpu)

---

**Built with ❤️ and lots of ☕**
