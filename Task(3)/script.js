// Theme Toggle
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");

function toggleTheme(btn) {
    body.classList.toggle("dark-mode");
    const icon = btn.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

// Desktop toggle
themeToggle.addEventListener("click", () => toggleTheme(themeToggle));
// Mobile toggle
themeToggleMobile.addEventListener("click", () => toggleTheme(themeToggleMobile));

// Active Nav Link on Scroll
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100; // offset for navbar
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Initialize AOS (Scroll Animations)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,  
        easing: 'ease-out',
        once: true,     
        offset: 100,    
    });
});
