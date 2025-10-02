const slides = document.querySelectorAll(".slides a img");
const slideTexts = document.querySelectorAll(".slide-text");
let slideIndex = 0;
let interval = null;

document.addEventListener("DOMContentLoaded", initSlider)

function initSlider(){

    if (slides.length > 0) {

        slides[slideIndex].classList.add("displaySlide");
        slideTexts[slideIndex].classList.add("displayText");
        intervalId = setInterval(nextSlide, 5000);
        console.log(intervalId);

    }
}

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slideTexts.forEach(text => {
        text.classList.remove("displayText");
    });
    slides[slideIndex].classList.add("displaySlide");
    slideTexts[slideIndex].classList.add("displayText");
}

function prevSlide(){
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
}



var tablinks = document.getElementsByClassName('tab-links')
        var tabcontents = document.getElementsByClassName('tab-contents')

        function opentab(tabname){
            for (tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab")
            }

            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab")
        }