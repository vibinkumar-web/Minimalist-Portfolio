// Animation-First Portfolio Logic
// Focusing on IntersectionObserver for performant scroll triggering

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Animation Observer System ---
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-text, .reveal-scale, .reveal-pop, .reveal-fade-right'
    );
    animatedElements.forEach(el => animateOnScroll.observe(el));


    // --- 2. Scroll Spy (Active Nav Link) ---
    // Highlights the current section in the navbar
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    const scrollContainer = document.querySelector('.scroll-container'); // Restored container ref

    const scrollSpyOptions = {
        root: scrollContainer, // WATCH THE CONTAINER, NOT WINDOW
        threshold: 0.5
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(section => scrollSpyObserver.observe(section));


    // --- 3. Parallax Engine & Navbar ---
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const navbar = document.getElementById('navbar');

    let ticking = false;

    // Listen to CONTAINER scroll
    scrollContainer.addEventListener('scroll', () => {
        const scrolled = scrollContainer.scrollTop;

        // Navbar Blur Logic
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Parallax Logic
        if (window.innerWidth > 768) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    parallaxLayers.forEach(layer => {
                        const speed = layer.getAttribute('data-speed') || 0.2;
                        const yPos = -(scrolled * speed);
                        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        }
    });


    // --- 4. Typing Effect (Hero) ---
    const typingText = document.querySelector('.type-target');
    const phrases = ["Digital Systems", "Interactive UI", "Web Experiences"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeLoop() {
        if (!typingText) return;

        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeLoop, typeSpeed);
    }
    if (typingText) setTimeout(typeLoop, 1000);


    // --- 5. Magnetic Button Effect (Hover) ---
    const magnetBtns = document.querySelectorAll('.magnet-btn');

    magnetBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate3d(0, 0, 0)';
        });
    });


    // --- 6. Navigation (Smooth Scroll to ID) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksList = document.getElementById('nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetInfo = document.querySelector(targetId);

            if (targetInfo && scrollContainer) {
                if (navLinksList) navLinksList.classList.remove('active');
                if (menuToggle && menuToggle.querySelector('i')) {
                    menuToggle.querySelector('i').classList.remove('fa-times');
                }

                // Container smooth scroll
                targetInfo.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});