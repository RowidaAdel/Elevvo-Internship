// Intersection Observer for staggered animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, i * 150);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with hidden class
document.querySelectorAll(".navbar, .hero, .features, .feature, .benefits, .benefit, .pricing, .card, .footer")
    .forEach(el => observer.observe(el));

// Navbar toggle for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-x");
});
