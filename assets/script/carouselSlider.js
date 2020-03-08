// variable initializations
var carouselSliderContainer = document.querySelector(".carouselBanner-content");
var carouselSlider = document.querySelector(".carouselBanner-content-slider");
var carouselSlide = document.getElementsByClassName("carouselBanner-content-slide");
var carouselCounter = 1;

// setting total width of the slider
carouselSlider.style.width = (100*carouselSlide.length) + "%";

// setting width for each slide
for (i=0; i<=carouselSlide.length-1; i++) {
    carouselSlide[i].style.width = (carouselSlider.clientWidth / carouselSlide.length) + "%";
}

// setting the initial position of the slider
carouselSlider.style.transform = "translateX(" + (-100 / carouselSlide.length) + "%)";

// PREV button
document.querySelector("#carouselBanner-prev_BTN").addEventListener("click", function() {
    if(carouselCounter >= 0) {
        carouselSlider.classList.add("slider-transition");
        carouselSlider.style.transform += "translateX(" + (100 / carouselSlide.length) + "%)";
        carouselCounter--;
    }
});

// NEXT button
document.querySelector("#carouselBanner-next_BTN").addEventListener("click", function() {
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