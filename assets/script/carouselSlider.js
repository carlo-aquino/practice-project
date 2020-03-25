// variable initializations
var carouselSliderContainer = document.querySelector(".carouselBanner__content");
var carouselSlider = document.querySelector(".carouselBanner--content__slider");
var carouselSlide = document.getElementsByClassName("carouselBanner--slider__item");

var carouselCounter = 1;

const sliderChildren = carouselSlider.children;
const firstSlide = sliderChildren[0];
const lastSlide = sliderChildren[sliderChildren.length-1];
const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

const bannerSlider = document.getElementById("carouselSlider");

if (sliderChildren.length > 1) {
    //duplicating slides for looping
    bannerSlider.appendChild(cloneFirstSlide);
    sliderChildren[sliderChildren.length-1].setAttribute("id", "firstSlide");

    bannerSlider.appendChild(cloneLastSlide);
    bannerSlider.insertBefore(cloneLastSlide, bannerSlider.childNodes[0]);
    sliderChildren[0].setAttribute("id", "lastSlide");

    // setting the initial position of the slider
    carouselSlider.style.transform = "translateX(" + (-100 / carouselSlide.length) + "%)";    

} else {
    document.querySelector(".carouselBanner__arrows").style.display = "none";
}

// setting total width of the slider
carouselSlider.style.width = (100*carouselSlide.length) + "%";

// setting width for each slide
for (i=0; i<=carouselSlide.length-1; i++) {
    carouselSlide[i].style.width = (carouselSlider.clientWidth / carouselSlide.length) + "%";
}

// PREV button
document.querySelector("#carouselBanner--prev__BTN").addEventListener("click", function() {
    if(carouselCounter > 0) {
        carouselSlider.classList.add("slider-transition");
        carouselSlider.style.transform += "translateX(" + (100 / carouselSlide.length) + "%)";
        carouselCounter--;
    }
});

// NEXT button
document.querySelector("#carouselBanner--next__BTN").addEventListener("click", function() {
    if(carouselCounter <= carouselSlide.length-2) {
        carouselSlider.classList.add("slider-transition");
        carouselSlider.style.transform += "translateX(" + (-100 / carouselSlide.length) + "%)";
        carouselCounter++;
    }
});

// slider looping
carouselSlider.addEventListener("transitionend", function() {
    if(carouselSlide[carouselCounter].id === "firstSlide") {
        carouselSlider.classList.toggle("slider-transition");
        carouselSlider.style.transform = "translateX(" + (-100 / carouselSlide.length) + "%)";
        carouselCounter = 1;
    }

    if(carouselSlide[carouselCounter].id === "lastSlide") {
        carouselSlider.classList.toggle("slider-transition"); 
        carouselSlider.style.transform = "translateX(" + ((-100 / carouselSlide.length)*(carouselSlide.length-2)) + "%)";
        carouselCounter = carouselSlide.length - 2;
    }
});