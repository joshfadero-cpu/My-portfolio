// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.getElementById('custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Only initialize cursor on non-touch devices
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth easing for cursor follow
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .video-card, .loop-item, .contact-link, .cta-button');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
} else {
    // Hide cursor on touch devices
    if (cursor) cursor.style.display = 'none';
}

// ============================================
// TEXT CYCLING ANIMATION
// ============================================

const textCycle = document.getElementById('text-cycle');
const words = ['EdTech', 'Startups', 'Brands', 'Creators', 'Innovators'];
let currentIndex = 0;

function cycleText() {
    if (!textCycle) return;
    
    gsap.to(textCycle, {
        opacity: 0,
        y: -20,
        filter: 'blur(10px)',
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            currentIndex = (currentIndex + 1) % words.length;
            textCycle.textContent = words[currentIndex];
            gsap.to(textCycle, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.4,
                ease: 'power2.out'
            });
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
