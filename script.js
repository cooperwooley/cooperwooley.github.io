// Hamburger menu
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth"});
        }
    });
});

// Carousel functionality
const track = dcoument.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = dcoument.querySelector(".carousel-button.next");
const prevButton = document.querySelector(".carousel-button.prev");

let currentIndex = 0;

function updateSlidePosition() {
    track.style.transform = "translateX(-${currentIndex * 100}%";
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

// Automatic sliding
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
}, 5000);