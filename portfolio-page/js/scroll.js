// menu transition
const navBar = document.querySelector('.header__menu-list');
const sectionContact = document.querySelector('.contact'); 
//animation about
const sectionAbout = document.querySelector(".about");
const aboutWrapp = document.querySelector(".about__wrapper");
const aboutFromTop = sectionAbout.offsetTop;

document.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  // menu transition
  if(scrollValue > navBar.offsetHeight /2 & window.innerWidth >= 1024){
    menu.classList.add('header__menu--transition');
  }else if(scrollValue < navBar.offsetHeight & window.innerWidth >= 1024){
    menu.classList.remove('header__menu--transition');
  } 
  
//animation about
  if (scrollValue > aboutFromTop / 2) {
    aboutWrapp.classList.add("about__wrapper--active");
  }
});
