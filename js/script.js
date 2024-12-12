let currentSlideIndex = 0;
const slides = document.querySelectorAll('.events-section .event-slide');
const totalSlides = slides.length;

function updateSlider() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    // Show the current slide
    slides[currentSlideIndex].style.display = 'block';

    // Update the pagination dots
    const dots = document.querySelectorAll('.events-section .pagination .dot');
    dots.forEach((dot, index) => {
        dot.className = index === currentSlideIndex ? 'dot active' : 'dot';
    });
}

function nextEvent() {
    if (currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop to the start
    }
    updateSlider();
}

function previousEvent() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = totalSlides - 1; // Loop to the end
    }
    updateSlider();
}

document.addEventListener('DOMContentLoaded', updateSlider);


// Upcoming Meeting Carousel Setup
const upcomingSlider = document.querySelector('.meeting-section .carousel-slider');
const upcomingPrevButton = document.querySelector('.meeting-section .carousel-button-prev');
const upcomingNextButton = document.querySelector('.meeting-section .carousel-button-next');
let upcomingCurrentIndex = 0;
const upcomingTotalCards = upcomingSlider.querySelectorAll('.card').length;

function updateUpcomingSlider() {
    const offset = upcomingCurrentIndex * 100; // Move the slider to the current index
    upcomingSlider.style.transform = `translateX(-${offset}%)`;
    updateUpcomingNavigation();
}

function updateUpcomingNavigation() {
    const dots = document.querySelectorAll('.meeting-section .pagination .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === upcomingCurrentIndex);
    });
    // Enable the previous button if not on the first slide
    upcomingPrevButton.disabled = upcomingCurrentIndex === 0;
    // Always enable the next button except in case of single card
    upcomingNextButton.disabled = upcomingTotalCards <= 1;
}

// When clicking 'previous', navigate to the preceding slide or to the last slide if on the first one
upcomingPrevButton.addEventListener('click', () => {
    if (upcomingCurrentIndex > 0) {
        upcomingCurrentIndex--;
    } else {
        upcomingCurrentIndex = upcomingTotalCards - 1;
    }
    updateUpcomingSlider();
});

// When clicking 'next', navigate to the following slide or loop back to the first slide
upcomingNextButton.addEventListener('click', () => {
    if (upcomingCurrentIndex < upcomingTotalCards - 1) {
        upcomingCurrentIndex++;
    } else {
        upcomingCurrentIndex = 0;
    }
    updateUpcomingSlider();
});

// Initialize the slider on page load
document.addEventListener('DOMContentLoaded', updateUpcomingSlider);
