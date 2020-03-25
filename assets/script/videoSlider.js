// variable initializations
var sliderContainer = document.querySelector(".stack03--videoSlider__container");
var slider = document.querySelector(".stack03--videoSlider__item");
var slide = document.getElementsByClassName("stack03--videoSlider--item__content");

const sliderMargin = 0.21019442984760903;
var counter = 1;

function toPercent (numValue) {
    return (numValue / slider.clientWidth)*100;
}

// setting total width of the slider: totalWidth = no. of slides x 100
slider.style.width = slide.length*100 + "%";

// setting width for each slide
for (i=0; i<=slide.length-1; i++) {
    slide[i].style.width = toPercent(sliderContainer.clientWidth*0.65) + "%";
}

// setting margin for each slide
for (j=0; j<=slide.length-1; j++) {
    slide[j].style.marginLeft = sliderMargin + "%";
    slide[j].style.marginRight = sliderMargin + "%";
}

var slideLength = toPercent(slide[0].clientWidth) + sliderMargin*2;
var spacer = toPercent(sliderContainer.clientWidth) - ((slideLength/2) + (toPercent(sliderContainer.clientWidth)/2));
var sliderContent = toPercent(slide[0].clientWidth);

// setting the initial position of the slider
slider.style.transform = "translateX(" + -((sliderContent*2 + sliderMargin*4) - spacer) + "%)";

// NEXT button
document.querySelector(".stack03--videoSlider--controls__NEXT").addEventListener("click", function() {
    if(counter <= slide.length-4) {
        slider.classList.add("slider-transition");
        slider.style.transform += "translateX(" + -((sliderContent + sliderMargin*2)) + "%)";
        counter++;
    }
});

// PREV button
document.querySelector(".stack03--videoSlider--controls__PREV").addEventListener("click", function() {
    if(counter > 0) {
        slider.classList.add("slider-transition");
        slider.style.transform += "translateX(" + ((sliderContent + sliderMargin*2)) + "%)";
        counter--;
    }
});

//slider looping
slider.addEventListener("transitionend", function() {
    if(slide[counter].id === "firstSlider") {
        slider.classList.toggle("slider-transition");
        slider.style.transform = "translateX(" + -((sliderContent*2 + sliderMargin*4) - spacer) + "%)";
        counter = 1;
    }

    if(slide[counter].id === "lastSlider") {
        slider.classList.toggle("slider-transition"); 
        slider.style.transform = "translateX(" + -((sliderContent*3 + sliderMargin*6) - spacer) + "%)";
        counter = slide.length - 4;
    }
});

