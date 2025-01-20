document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  let currentSlide = 0;

  function updateArrows() {
    if (currentSlide === 0) {
      prevButton.style.display = "none";
      nextButton.style.display = "block";
      nextButton.style.right = "10px";
    } else if (currentSlide === slides.length - 1) {
      prevButton.style.display = "block";
      prevButton.style.left = "10px";
      nextButton.style.display = "none";
    }
  }

  function goToSlide(n) {
    slider.style.transform = `translateX(-${n * 100}%)`;
    currentSlide = n;
    updateArrows();
  }

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  });

  // Initialize arrows
  updateArrows();
});
