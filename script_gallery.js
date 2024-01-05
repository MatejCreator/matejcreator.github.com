let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(offset) {
    showSlides(slideIndex += offset);
}

function currentSlide(index) {
    showSlides(slideIndex = index);
}

function showSlides(index) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and update the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


