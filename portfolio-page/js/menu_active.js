const menuIcons = document.querySelector(".header__menu-icons");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu = document.querySelector(".header__menu");

menuIcons.addEventListener("click", () => {
  menuIcons.classList.toggle("header__menu-icons--left");
  iconBurger.classList.toggle("header__icon--show");
  iconX.classList.toggle("header__icon--show");
  menu.classList.toggle("header__menu--active");
});
