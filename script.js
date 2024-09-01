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

// Project carousel
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".carousel-arrow.prev");
const nextButton = document.querySelector(".carousel-arrow.next");
let currentSlide = 0;

function showSlide(index) { 
    slides[currentSlide].style.left = "100%";
    slides[index].style.next = "0%";

    dots[currentSlide].classList.remove("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

showSlide(0);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);