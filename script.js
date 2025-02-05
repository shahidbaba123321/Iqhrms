// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('header nav ul');

mobileMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
