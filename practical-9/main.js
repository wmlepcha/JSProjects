// grab the required elements

let slides = document.querySelectorAll('.slide');
let prevButton = document.querySelector('.slider-control-prev');
let nextButton = document.querySelector('.slider-control-next');

let currentSlide = 0;

// show slides 
function showSlides(index) {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide(){
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlides(currentSlide);
}

function prevSlide(){
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlides(currentSlide);
}

showSlides(0);

prevButton.addEventListener('click',prevSlide);
nextButton.addEventListener('click',nextSlide);

setInterval(nextSlide,4000);