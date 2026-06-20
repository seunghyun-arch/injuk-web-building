const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;
let autoPlayInterval;

function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    if (currentIndex === totalSlides - 1) {
        moveToSlide(0);
    } else {
        moveToSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex === 0) {
        moveToSlide(totalSlides - 1);
    } else {
        moveToSlide(currentIndex - 1);
    }
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

startAutoPlay();