let currentIndex = 0;
const slides = document.querySelectorAll('.main-scndpage__bloc');
const dots = document.querySelectorAll('.dot_scndpage');
const carousel = document.querySelector('.main-scndpage');


//AVoir la fonction active sur le point correspondant à l'index ou l'on se trouve
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function currentSlide(index) {
  currentIndex = index - 1;
  const width = carousel.clientWidth;
  carousel.scrollTo({
    left: width * currentIndex,
    behavior: 'smooth',
  });
  updateDots();
}

function plusSlides(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  const width = carousel.clientWidth;
  carousel.scrollTo({
    left: width * currentIndex,
    behavior: 'smooth',
  });
  updateDots();
}

// avoir le carousel accordé avec la position de scroll
carousel.addEventListener('scroll', () => {
  const width = carousel.clientWidth;
  const index = Math.round(carousel.scrollLeft / width);
  currentIndex = index;
  updateDots();
});

// Initialize
currentSlide(1);





// var slideNumber = 1;
// showSlides(slideNumber);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideNumber = n);
// }

// function showSlides(n) {
//   var x;
//   var slides = document.getElementsByClassName("main-scndpage__bloc");
//   var dots = document.getElementsByClassName("dot_scndpage");
//   if (n > slides.length) { slideNumber = 1 }
//   if (n < 1) { slideNumber = slides.length }


//   for (x = 0; x < dots.length; x++) {
//     dots[x].className = dots[x].className.replace("active", "");
//   }
//   slides[slideNumber - 1].style.display = "flex";
//   dots[slideNumber - 1].className += "active";
// }