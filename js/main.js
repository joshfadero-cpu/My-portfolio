// ============================================
// CUSTOM CURSOR WITH TRAIL
// ============================================

const cursor = document.getElementById('custom-cursor');
const trail = document.getElementById('cursor-trail');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const trailDots = [];
const TRAIL_COUNT = 8; // Reduced for performance

// Only initialize cursor on non-touch devices
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursor && trail) {
    // Create trail dots
    for (let i = 0; i < TRAIL_COUNT; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        trail.appendChild(dot);
        trailDots.push({ element: dot, x: 0, y: 0 });
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // More responsive cursor follow (reduced lag)
        cursorX += (mouseX - cursorX) * 0.4;
        cursorY += (mouseY - cursorY) * 0.4;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Trail dots with increasing lag
        trailDots.forEach((dot, index) => {
            const lag = 0.15 - (index * 0.015);
            dot.x += (mouseX - dot.x) * lag;
            dot.y += (mouseY - dot.y) * lag;
            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';
            dot.element.style.opacity = 0.8 - (index * 0.1);
        });
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Context-aware cursor states
    const interactiveElements = {
        '.video-card': 'play',
        'a, button, .contact-link, .cta-button': 'pointer',
        '#frankenstein, .tool-showcase': 'zoom'
    };
    
    Object.entries(interactiveElements).forEach(([selector, state]) => {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursor.setAttribute('data-state', state);
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursor.removeAttribute('data-state');
            });
        });
    });
} else {
    // Hide cursor on touch devices
    if (cursor) cursor.style.display = 'none';
    if (trail) trail.style.display = 'none';
}

// ============================================
// TEXT CYCLING ANIMATION
// ============================================

const textCycle = document.getElementById('text-cycle');
const words = ['EdTech', 'Startups', 'Brands', 'Creators', 'Innovators'];
let currentIndex = 0;

function cycleText() {
    if (!textCycle) return;
    
    // Enhanced text cycling with 3D rotation and scale
    gsap.to(textCycle, {
        opacity: 0,
        scale: 0.8,
        filter: 'blur(10px)',
        y: -30,
        rotationX: 45,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
            currentIndex = (currentIndex + 1) % words.length;
            textCycle.textContent = words[currentIndex];
            gsap.fromTo(textCycle, 
                { 
                    opacity: 0, 
                    scale: 1.2, 
                    filter: 'blur(10px)', 
                    y: 30, 
                    rotationX: -45 
                },
                { 
                    opacity: 1, 
                    scale: 1, 
                    filter: 'blur(0px)', 
                    y: 0, 
                    rotationX: 0, 
                    duration: 0.5, 
                    ease: 'power2.out' 
                }
            );
        }
    });
}

// Start cycling after initial delay
if (textCycle) {
    setTimeout(() => {
        setInterval(cycleText, 3000);
    }, 2000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offset = 80;
            const startPosition = window.pageYOffset;
            const targetPosition = target.getBoundingClientRect().top + startPosition - offset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1 second
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const ease = progress / duration;
                
                // Easing function (ease-in-out)
                const eased = ease < 0.5 
                    ? 2 * ease * ease 
                    : 1 - Math.pow(-2 * ease + 2, 2) / 2;
                
                window.scrollTo(0, startPosition + distance * eased);
                
                if (progress < duration) {
                    requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            }
            
            requestAnimationFrame(step);
        }
    });
});

// ============================================
// LAZY LOAD YOUTUBE IFRAMES
// ============================================

const lazyLoadVideos = () => {
    const videoWrappers = document.querySelectorAll('.video-wrapper iframe[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.getAttribute('data-src');
                iframe.removeAttribute('data-src');
                observer.unobserve(iframe);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    videoWrappers.forEach(iframe => {
        observer.observe(iframe);
    });
};

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadVideos);
} else {
    lazyLoadVideos();
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });
}

// ============================================
// MOUSE GLOW EFFECT
// ============================================

const mouseGlow = document.getElementById('mouse-glow');
if (mouseGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        gsap.to(mouseGlow, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
} else if (mouseGlow) {
    mouseGlow.style.display = 'none';
}
