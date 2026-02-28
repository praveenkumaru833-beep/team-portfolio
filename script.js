document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sticky Navbar & Scroll Progress
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
        // Navbar glass effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll Progress
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // Scroll Fade-in Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.scroll-element');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
    
    // Add glitch effect on hover for hero title
    const glitchTitle = document.querySelector('.glitch');
    glitchTitle.addEventListener('mouseover', () => {
        glitchTitle.style.textShadow = `
            2px 2px 0px var(--neon-blue),
            -2px -2px 0px var(--neon-purple)
        `;
        setTimeout(() => {
            glitchTitle.style.textShadow = '0 0 20px rgba(255,255,255,0.3)';
        }, 300);
    });
});
