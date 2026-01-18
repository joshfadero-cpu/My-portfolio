// ============================================
// PORTFOLIO ENHANCEMENTS v2.0
// ============================================

// Check if we're on a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                 window.matchMedia('(hover: none) and (pointer: coarse)').matches;

// ============================================
// ENHANCEMENT 1: PARTICLES.JS INITIALIZATION
// ============================================

// Wait for DOM and deferred scripts to load
function initEnhancements() {
    if (typeof particlesJS !== 'undefined' && !isMobile) {
        const particleCount = isMobile ? 25 : 50;
    
    particlesJS('particles-js', {
        particles: {
            number: { 
                value: particleCount,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: { 
                value: '#9333ea' 
            },
            opacity: { 
                value: 0.3, 
                random: true 
            },
            size: { 
                value: 3, 
                random: true 
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#9333ea',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: false
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

// ============================================
// ENHANCEMENT 2: ANIMATED LETTER ENTRY
// ============================================

function initAnimatedLetters() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span class="letter">${char}</span>`
    ).join('');
    
    const letters = heroTitle.querySelectorAll('.letter');
    gsap.from(letters, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.2
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimatedLetters);
} else {
    initAnimatedLetters();
}

// ============================================
// ENHANCEMENT 3: 3D TILT EFFECT ON VIDEO CARDS
// ============================================

    if (typeof VanillaTilt !== 'undefined' && !isMobile) {
        const videoCards = document.querySelectorAll('.video-card');
        if (videoCards.length > 0) {
            VanillaTilt.init(videoCards, {
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.3,
                scale: 1.05,
                perspective: 1000,
                gyroscope: false
            });
        }
    }
    
    // ============================================
    // ENHANCEMENT 4: MAGNETIC CARD EFFECT
    // ============================================

    if (!isMobile) {
        document.querySelectorAll('.video-card').forEach(card => {
        const videoInfo = card.querySelector('.video-info');
        if (!videoInfo) return;
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(videoInfo, {
                x: x * 0.1,
                y: y * 0.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(videoInfo, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        });
    }
    
    // ============================================
    // ENHANCEMENT 5: ANIMATED BORDER DRAW
    // ============================================

    function addCardBorders() {
        const videoCards = document.querySelectorAll('.video-card');
        
        videoCards.forEach(card => {
        // Check if border already exists
        if (card.querySelector('.card-border')) return;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'card-border');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('preserveAspectRatio', 'none');
        
        // Add gradient definition
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', `gradient-${Math.random().toString(36).substr(2, 9)}`);
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#9333ea');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#a855f7');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.appendChild(defs);
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', '1');
        rect.setAttribute('y', '1');
        rect.setAttribute('width', '98');
        rect.setAttribute('height', '98');
        rect.setAttribute('fill', 'none');
        rect.setAttribute('stroke', `url(#${gradient.id})`);
        rect.setAttribute('stroke-width', '0.5');
        
        svg.appendChild(rect);
        card.appendChild(svg);
    });
}

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', addCardBorders);
        } else {
            addCardBorders();
        }
    }
    
    // ============================================
    // ENHANCEMENT 6: TEXT SCRAMBLE EFFECT
    // ============================================

class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
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
        let output = '';
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
    if (typeof ScrollTrigger !== 'undefined') {
        document.querySelectorAll('.section-title').forEach(title => {
        const fx = new TextScramble(title);
        const originalText = title.textContent;
        
        ScrollTrigger.create({
            trigger: title,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                fx.setText(originalText);
            }
        });
        });
    }
    
    // ============================================
    // ENHANCEMENT 7: STAGGERED ENTRY ANIMATIONS
    // ============================================

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.utils.toArray('.video-card').forEach((card, index) => {
        const direction = index % 3 === 0 ? -100 : index % 3 === 1 ? 100 : 0;
        const yDirection = index % 3 === 2 ? 100 : 0;
        
        gsap.from(card, {
            x: direction,
            y: yDirection,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
        });
    }
    
    // ============================================
    // ENHANCEMENT 8: SECTION BACKGROUND COLOR TRANSITIONS
    // ============================================

    if (typeof ScrollTrigger !== 'undefined') {
        const sections = gsap.utils.toArray('section');
        const colors = ['#0a0a0a', '#0f0a1a', '#1a0a2e', '#0a0a0a'];
        
        sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                gsap.to('body', {
                    backgroundColor: colors[index % colors.length] || colors[0],
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
            },
            onEnterBack: () => {
                gsap.to('body', {
                    backgroundColor: colors[index % colors.length] || colors[0],
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
            }
        });
        });
    }
    
    // ============================================
    // ENHANCEMENT 9: HORIZONTAL SCROLL FOR LOOPS (OPTIONAL)
    // ============================================

// Uncomment to enable horizontal scroll for loops section
/*
if (typeof ScrollTrigger !== 'undefined') {
    const loopsSection = document.querySelector('#loops');
    const scrollContent = document.querySelector('.scroll-content');
    
    if (loopsSection && scrollContent && !isMobile) {
        gsap.to('.scroll-content', {
            x: () => -(scrollContent.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: loopsSection,
                pin: true,
                scrub: 1,
                end: () => `+=${scrollContent.scrollWidth}`
            }
        });
    }
}
*/

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

    // Disable heavy features on mobile
    if (isMobile) {
    // Disable particles
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        particlesContainer.style.display = 'none';
    }
    
    // Disable mouse glow
    const mouseGlow = document.getElementById('mouse-glow');
    if (mouseGlow) {
        mouseGlow.style.display = 'none';
    }
    
    // Disable tilt effects (already handled by VanillaTilt, but ensure)
    document.querySelectorAll('.video-card').forEach(card => {
        if (card.vanillaTilt) {
            card.vanillaTilt.destroy();
        }
    });
}

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        // Disable animations
        if (typeof gsap !== 'undefined') {
            gsap.globalTimeline.timeScale(0);
        }
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.getAll().forEach(trigger => trigger.disable());
        }
        
        // Hide particles
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'none';
        }
    }


// Initialize when DOM and scripts are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait a bit for deferred scripts to load
        setTimeout(initEnhancements, 100);
    });
} else {
    setTimeout(initEnhancements, 100);
}

// Initialize when DOM and scripts are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait a bit for deferred scripts to load
        setTimeout(initEnhancements, 100);
    });
} else {
    setTimeout(initEnhancements, 100);
}
