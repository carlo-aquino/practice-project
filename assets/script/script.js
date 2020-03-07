// variable initializations
var sliderContainer = document.querySelector(".carouselBanner-content");
var slider = document.querySelector(".carouselBanner-content-slider");
var slide = document.getElementsByClassName("carouselBanner-content-slide");
var counter = 1;

// setting total width of the slider
slider.style.width = (100*slide.length) + "%";

// setting width for each slide
for (i=0; i<=slide.length-1; i++) {
    slide[i].style.width = (slider.clientWidth / slide.length) + "%";
}

// setting the initial position of the slider
// slider.style.transform = "translateX(" + (-100 / slide.length) + "%)";

// PREV button
document.querySelector("#carouselBanner-prev_BTN").addEventListener("click", function() {
    if(counter >= 0) {
        slider.classList.add("slider-transition");
        slider.style.transform += "translateX(" + (100 / slide.length) + "%)";
        counter--;
    }
});

// NEXT button
document.querySelector("#carouselBanner-next_BTN").addEventListener("click", function() {
    if(counter <= slide.length-2) {
        slider.classList.add("slider-transition");
        slider.style.transform += "translateX(" + (-100 / slide.length) + "%)";
        counter++;
    }
});

// slider looping
slider.addEventListener("transitionend", function() {
    if(slide[counter].id === "firstSlide") {
        slider.classList.toggle("slider-transition");
        slider.style.transform = "translateX(" + (-100 / slide.length) + "%)";
        counter = 1;
    }

    if(slide[counter].id === "lastSlide") {
        slider.classList.toggle("slider-transition"); 
        slider.style.transform = "translateX(" + ((-100 / slide.length)*(slide.length-2)) + "%)";
        counter = slide.length - 2;
    }
});