// Slider automático
let slideIndex = 0;
const slides = document.querySelector('.slider');
const slideWidth = document.querySelector('.slide').offsetWidth;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos