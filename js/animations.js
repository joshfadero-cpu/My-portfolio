// ============================================
// GSAP SCROLLTRIGGER ANIMATIONS
// ============================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION ANIMATIONS
// ============================================

const heroTimeline = gsap.timeline();

heroTimeline
    .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4')
    .to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');

// Set initial states
gsap.set(['.hero-title', '.hero-subtitle', '.hero-description', '.cta-button'], {
    y: 30,
    opacity: 0
});

// ============================================
// SECTION TITLE ANIMATIONS
// ============================================

gsap.utils.toArray('.section-title').forEach(title => {
    gsap.fromTo(title, 
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// ============================================
// PORTFOLIO GRID ANIMATIONS
// ============================================

gsap.utils.toArray('.video-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// ============================================
// LOOPS GRID ANIMATIONS
// ============================================

gsap.utils.toArray('.loop-item').forEach((item, index) => {
    gsap.fromTo(item,
        {
            opacity: 0,
            scale: 0.9
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.2)',
            delay: index * 0.1,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// ============================================
// FRANKENSTEIN FINDER SECTION ANIMATION
// ============================================

gsap.fromTo('.tool-showcase',
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.tool-showcase',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none'
        }
    }
);

// Animate tool image and content separately for more impact
gsap.fromTo('.tool-image',
    {
        opacity: 0,
        x: -50
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.tool-showcase',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none'
        }
    }
);

gsap.fromTo('.tool-content',
    {
        opacity: 0,
        x: 50
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.tool-showcase',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none'
        }
    }
);

// ============================================
// CONTACT LINKS ANIMATION
// ============================================

gsap.utils.toArray('.contact-link').forEach((link, index) => {
    gsap.fromTo(link,
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: index * 0.15,
            scrollTrigger: {
                trigger: link,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none none'
            }
        }
    );
});

// ============================================
// PARALLAX EFFECT FOR HERO BACKGROUND
// ============================================

gsap.to('.hero-background', {
    y: -100,
    ease: 'none',
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Refresh ScrollTrigger on window resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Refresh ScrollTrigger after images load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});

// Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    gsap.globalTimeline.timeScale(0);
    ScrollTrigger.getAll().forEach(trigger => trigger.disable());
}
