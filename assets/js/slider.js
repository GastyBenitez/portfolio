// ==========================================
// Browser Slider
// ==========================================

const slider = document.querySelector(".browser-slider");
const slides = document.querySelectorAll(".browser-slide");

let currentSlide = 0;

const browserTitle = document.querySelector(".browser-title");

const slideTitles = [
    "Landing Page",
    "Comdilo • Vista Cliente (Beta)",
    "Comdilo • Panel Administrativo (Beta)"
];

// ==========================================
// Mover el slider
// ==========================================

function goToSlide(index) {

    slider.style.transform = `translateX(-${index * 100}%)`;

    browserTitle.textContent = slideTitles[index];

}

// ==========================================
// Siguiente slide
// ==========================================

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    goToSlide(currentSlide);

}

goToSlide(currentSlide);

setInterval(nextSlide, 4000);