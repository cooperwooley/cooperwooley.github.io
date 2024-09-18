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
        if (link.getAttribute("href").startsWith("#") || link.getAttribute("href".startsWith("index"))) {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth"});
        }
    });
});

document.addEventListener("scroll", function() {
    let tags = [
        document.getElementById("about"),
        document.getElementById("projects")
    ];
  
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i];
      if (!tag) {
        console.error("Element not found:", tags[i]); // Debugging: Ensure elements are found
        continue;
      }

      let rect = tag.getBoundingClientRect();
      console.log("Element:", tag.id, "Rect Top:", rect.top, "Rect Bottom:", rect.bottom);

      if (rect.top <=window.innerHeight && rect.bottom >= 0) {
        tag.classList.add("visible");
        console.log(tag.id + " is visible");
      } else {
        tag.classList.remove("visible");
        console.log(tag.id + " is not visible");
      }
    }
  });

// Project carousel
let slideIndex = 1;
let autoSlideTimeout;

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    resetAutoSlide();
}

function autoSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
    resetAutoSlide();
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(autoSlides, 7000);
}

showSlides(1);