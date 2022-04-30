const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const btnPrev = document.querySelector(".carousel-button-prev");
const btnNext = document.querySelector(".carousel-button-next");

const projectCategory = document.querySelector(".project-category");

btnNext.addEventListener("click", moveToNextSlide);
btnPrev.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

    if (slidePosition === 0) {
        projectCategory.innerText = `Brand naming & \n guidelines`;
    } else if (slidePosition === 1) {
        projectCategory.innerText = `Brand identity & \n merchandise`;
    } else {
        projectCategory.innerText = `Brand identity & \n web design`;
    }
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

    if (slidePosition === 0) {
        projectCategory.innerText = `Brand naming & \n guidelines`;
    } else if (slidePosition === 1) {
        projectCategory.innerText = `Brand identity & \n merchandise`;
    } else {
        projectCategory.innerText = `Brand identity & \n web design`;
    }
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}
