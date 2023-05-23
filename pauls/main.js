const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentPosition = 0;

nextButton.addEventListener('click', () => {
  if (currentPosition >= 100) {
    currentPosition = 0;
  } else {
    currentPosition += 100;
  }
  carouselSlide.style.transform = `translateX(-${currentPosition}%)`;
});

prevButton.addEventListener('click', () => {
  if (currentPosition === 0) {
    currentPosition = 100;
  } else {
    currentPosition -= 100;
  }
  carouselSlide.style.transform = `translateX(-${currentPosition}%)`;
});
