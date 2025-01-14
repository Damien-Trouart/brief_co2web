const burgerMenuButton = document.querySelector(".burger-menu-button");
const burgerMenuButtonIcon = document.querySelector(
  ".burger-menu-button i"
);
const burgerMenu = document.querySelector(".header__nav__ul");

burgerMenuButton.addEventListener("click", function () {
  burgerMenu.classList.toggle("open");
  const isOpen = burgerMenu.classList.contains("open");
  burgerMenuButtonIcon.className = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});