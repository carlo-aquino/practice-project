// variable initializations
var sliderContainer = document.querySelector(".stack-03-videoSlider-container");
var slider = document.querySelector(".stack-03-videoSlider-slider");
var slide = document.getElementsByClassName("stack-03-videoSlider-slider-content");

const sliderMargin = 0.21019442984760903;
var counter = 1;

// setting total width of the slider: totalWidth = no. of slides x 100
slider.style.width = slide.length*100 + "%";

// setting width for each slide
for (i=0; i<=slide.length-1; i++) {
    slide[i].style.width = ((sliderContainer.clientWidth*0.65) / slider.clientWidth)*100 + "%";
}

// setting margin for each slide
for (j=0; j<=slide.length-1; j++) {
    slide[j].style.marginLeft = sliderMargin + "%";
    slide[j].style.marginRight = sliderMargin + "%";
}

var slideLength = ((slide[0].clientWidth/slider.clientWidth)*100) + sliderMargin*2;
var spacer = ((sliderContainer.clientWidth/slider.clientWidth)*100) - ((slideLength/2) + (((sliderContainer.clientWidth/slider.clientWidth)*100)/2));
var sliderContent = (slide[0].clientWidth / slider.clientWidth)*100;

// setting the initial position of the slider
slider.style.transform = "translateX(" + -((sliderContent*2 + sliderMargin*4) - spacer) + "%)";

// NEXT button
document.querySelector("#stack-03-videoSlider-controls-right_BTN").addEventListener("click", function() {
    if(counter <= slide.length-4) {
        slider.classList.add("slider-transition");
        slider.style.transform += "translateX(" + -((sliderContent + sliderMargin*2)) + "%)";
        counter++;
    }
});

// PREV button
document.querySelector("#stack-03-videoSlider-controls-left_BTN").addEventListener("click", function() {
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

