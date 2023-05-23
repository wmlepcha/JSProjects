//grab the content
let sliderImage = document.querySelectorAll('.slider-image');
let prevButton = document.querySelector('.slider-prev');
let nextButton = document.querySelector('.slider-next');

let currentIndex = 0;

// show the images
function showImage(index){
    sliderImage.forEach(image => image.classList.remove('active'));
    sliderImage[index].classList.add('active');
}

// previous button show image
function prevImage(){
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = sliderImage.length - 1;
    }
    showImage(currentIndex);
}

// next button show image
function nextImage() {
    currentIndex++;
    if(currentIndex >= sliderImage.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentIndex);