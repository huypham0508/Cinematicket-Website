$(".hero-container").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 2000,
});

const navSlide = () => {
  const toogleBar = document.querySelector(".menu-active");
  const menu = document.querySelector(".menu-list");
  toogleBar.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
};
navSlide();
