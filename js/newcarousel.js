const carousel = document.querySelector('.carousel');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 1; // Start at the first actual image
let divImages = document.querySelectorAll('.carousel .divimg');

// Function to update the carousel position and indicators
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === (currentIndex - 1) % (divImages.length - 2));
    });
}

// Function to handle automatic sliding
function autoSlide() {
    currentIndex++;
    updateCarousel();
}

// Clone handling after transition
carousel.addEventListener('transitionend', () => {
    // Check if at the last cloned image
    if (currentIndex === divImages.length - 1) {
        carousel.style.transition = 'none';
        currentIndex = 1; // Jump back to the first actual image
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }

    // Check if at the first cloned image
    if (currentIndex === 0) {
        carousel.style.transition = 'none';
        currentIndex = divImages.length - 2; // Jump back to the last actual image
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
        }, 0);
    }
});

// Start automatic sliding every 3 seconds
setInterval(autoSlide, 3000);

function addImage() {
    const newImageSrc = 'https://picsum.photos/id/240/700/800'; // Placeholder path for new image

    // Replace the first actual image's div (second child of the carousel)
    divImages[1].querySelector('img').src = newImageSrc;

    // Update indicators if needed
    divImages = document.querySelectorAll('.carousel .divimg');
    updateCarousel();
}
