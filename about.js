document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".swiper-slide");
  const nextButton = document.querySelector(".swiper-button-next img");
  const prevButton = document.querySelector(".swiper-button-prev img");

  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "flex" : "none";
    });
  };

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  showSlide(currentSlide);
});
document.addEventListener("DOMContentLoaded", function () {
  // Code pour le Slide Show (si vous utilisez Swiper.js)
  const swiper = new Swiper(".swiper-container", {
    // Options Swiper
  });
});
