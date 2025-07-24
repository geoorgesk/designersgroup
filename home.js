// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (let link of anchorLinks) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
}

// Remove splash screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.splash-screen').remove();
    }, 3000);
});

// Change navbar style on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
