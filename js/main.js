/**
 * Image gallery logic:
 */
const timeout = 5000;
const sliderImages = document.querySelectorAll('.hero-slider img');
const sliderControls = document.querySelectorAll('.hero-slider-control');
let currentSlide = 0;
let interval;

function changeSlide(newSlide) {
  sliderImages[currentSlide].classList.remove('active');
  sliderImages[newSlide].classList.add('active');
  currentSlide = newSlide;
}

function nextSlide() {
  let newSlide = currentSlide + 1;
  if (newSlide >= sliderImages.length) {
    newSlide = 0;
  }
  changeSlide(newSlide);
}

function previousSlide() {
  let newSlide = currentSlide - 1;
  if (newSlide < 0) {
    newSlide = sliderImages.length - 1;
  }
  changeSlide(newSlide);
}

// Attach click events to slider controls
sliderControls.forEach((control) => {
  control.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(nextSlide, timeout);
    if (control.classList.contains('hero-slider-next')) {
      nextSlide();
    } else if (control.classList.contains('hero-slider-prev')) {
      previousSlide();
    }
  });
});

// Start automatic slide change
interval = setInterval(nextSlide, timeout);