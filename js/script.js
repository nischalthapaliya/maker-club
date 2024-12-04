// Get elements
const slider = document.querySelector('.carousel-slider');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const paginationContainer = document.querySelector('.pagination');

// Cards and Scrolling Info
const cards = Array.from(slider.children);
const cardWidth = cards[0].offsetWidth; // Width of one card
let currentIndex = 0;
const totalCards = cards.length;

// Function to update slider position
function updateSlider() {
    // Calculate the offset to shift the carousel to the correct card
    const offset = currentIndex * cardWidth;
    slider.style.transform = `translateX(-${offset}px)`;

    // Update pagination dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    
    // Disable/enable buttons based on current index
    nextButton.disabled = currentIndex === totalCards - 1;
    prevButton.disabled = currentIndex === 0;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    // Move to the previous card
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    // Move to the next card
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Event listeners for dots
paginationContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateSlider();
    }
});

// Initialize the first position and ensure the "next" button is disabled initially
updateSlider();
