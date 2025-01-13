var slideNumber = 1;
showSlides(slideNumber);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  var x;
  var slides = document.getElementsByClassName("main-scndpage__bloc");
  var dots = document.getElementsByClassName("dot_scndpage");
  if (n > slides.length) { slideNumber = 1 }
  if (n < 1) { slideNumber = slides.length }


  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  slides[slideNumber - 1].style.display = "flex";
  dots[slideNumber - 1].className += " active";
}