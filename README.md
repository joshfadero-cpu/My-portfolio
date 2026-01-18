# Josh Fadero — Motion Designer Portfolio

A premium, interactive portfolio website showcasing motion design work with advanced scroll animations, custom interactions, and a distinctive "wow factor" that stands out to recruiters and potential clients.

**Live Site:** [View Portfolio](https://joshfadero-cpu.github.io/portfolio-site) (when deployed)

---

## Features

### Visual Design
- **Dark Theme** with purple accent colors
- **Fluid Typography** that scales beautifully across devices
- **Atmospheric Backgrounds** with animated gradient mesh and noise texture
- **Premium Aesthetics** designed to impress

### Interactive Elements
- **Custom Cursor** with trail effect and context-aware states
- **3D Tilt Cards** that respond to mouse movement
- **Magnetic Effects** on video cards
- **Animated Border Draws** on card hover
- **Mouse-Following Glow** for immersive experience

### Motion & Animation
- **GSAP ScrollTrigger** animations throughout
- **Staggered Entry Animations** for portfolio cards
- **Text Scramble Effect** on section titles
- **Animated Letter Entry** for hero title
- **Enhanced Text Cycling** with 3D effects
- **Parallax Backgrounds** for depth
- **Scroll Progress Indicator** at top of page

### Content Sections
- **Hero Section** with animated introduction
- **Portfolio Grid** (6 YouTube video embeds)
- **In Motion** section (looping GIFs)
- **Frankenstein Finder** tool showcase
- **Contact Section** with email and LinkedIn

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
   git commit -m "Initial portfolio site"
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
- **Particles.js** - Floating particles system
- **Vanilla-Tilt.js** - 3D tilt effects

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
│   └── style.css           # All styles (design system + enhancements)
├── js/
│   ├── main.js             # Core functionality (cursor, text cycling, lazy loading)
│   ├── animations.js       # GSAP ScrollTrigger animations
│   └── enhancements.js     # v2.0 enhancements (particles, tilt, scramble)
├── assets/
│   ├── images/
│   │   └── Frankenstein Finder 3 🧩.png
│   └── loops/
│       ├── loop-1.webp
│       ├── loop-2.webp
│       ├── loop-3.webp
│       └── loop-4.webp
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

**Contact Information** (`index.html`):
- Update email and LinkedIn links in contact section

### Modify Colors

Edit CSS custom properties in `css/style.css`:
```css
:root {
    --accent-primary: #9333ea;  /* Main purple */
    --accent-hover: #a855f7;    /* Hover purple */
    --bg-primary: #0a0a0a;       /* Background */
    /* ... more colors */
}
```

### Adjust Animations

**Cursor Speed** (`js/main.js`):
```javascript
cursorX += (mouseX - cursorX) * 0.4; // Increase for faster, decrease for slower
```

**Text Cycle Speed** (`js/main.js`):
```javascript
setInterval(cycleText, 3000); // Change 3000ms to adjust interval
```

**Particle Count** (`js/enhancements.js`):
```javascript
const particleCount = isMobile ? 25 : 50; // Adjust numbers
```

---

## Testing

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Testing
1. Run **Lighthouse** audit (Chrome DevTools)
2. Target scores:
   - Performance: 85+
   - Accessibility: 95+
   - Best Practices: 100
   - SEO: 100

### Mobile Testing
- Test on actual devices (not just DevTools)
- Verify heavy features are disabled on touch devices
- Check touch target sizes (min 44px)

---

## Notes

### Performance Optimizations
- Lazy loading for YouTube iframes
- Particles disabled on mobile
- Cursor trail disabled on touch devices
- Reduced motion support for accessibility
- Optimized animations using `requestAnimationFrame`

### Mobile Considerations
- Custom cursor: Disabled on touch devices
- Particles: Reduced count or disabled
- Tilt effects: Disabled on mobile
- Mouse glow: Disabled on mobile

### Accessibility
- Respects `prefers-reduced-motion`
- Semantic HTML structure
- Proper alt text on images
- Keyboard navigation support

---

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

---

## License

© 2026 Josh Fadero. All rights reserved.

---

## Acknowledgments

- **GSAP** - Powerful animation library
- **Particles.js** - Beautiful particle effects
- **Vanilla-Tilt.js** - Smooth 3D tilt effects
- **Google Fonts** - Inter & Space Grotesk typefaces

---

## Contact

- **Email:** joshfadero@gmail.com
- **LinkedIn:** [josh-x](https://www.linkedin.com/in/josh-x/)
- **GitHub:** [joshfadero-cpu](https://github.com/joshfadero-cpu)

---

**Built with ❤️ and lots of ☕**
