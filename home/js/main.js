$(".hero-container").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000,
});
$(".standard-container").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000,
});
const navSlide = () => {
  const toogleBar = document.querySelector(".user-btn");
  const activeOption = document.querySelector(".menu-active");
  const menu = document.querySelector(".menu-list");
  const menuMobile = document.querySelector(".menu-list-mobile");
  const close = document.querySelector(".menu-delete");
  const closeTwo = document.querySelector(".menu-delete-two");
  toogleBar.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
  close.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
  activeOption.addEventListener("click", () => {
    menuMobile.classList.toggle("is-show");
  });
  closeTwo.addEventListener("click", () => {
    menuMobile.classList.toggle("is-show");
  });
};
navSlide();
const mode = () => {
  const sun = document.querySelector(".header-sun");
  const moon = document.querySelector(".header-moon");
  sun.addEventListener("click", () => {
    sun.classList.toggle("is-mode");
    moon.classList.toggle("is-mode");
  });
  moon.addEventListener("click", () => {
    sun.classList.toggle("is-mode");
    moon.classList.toggle("is-mode");
  });
};
mode();
