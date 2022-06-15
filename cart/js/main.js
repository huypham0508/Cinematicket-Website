const mode = () => {
  const sun = document.querySelector(".header-sun");
  const moon = document.querySelector(".header-moon");
  const main = document.querySelector("main");
  sun.addEventListener("click", () => {
    sun.classList.toggle("is-mode");
    moon.classList.toggle("is-mode");
    document.body.classList.toggle("light-mode");
    main.classList.toggle("light-mode");
  });
  moon.addEventListener("click", () => {
    sun.classList.toggle("is-mode");
    moon.classList.toggle("is-mode");
    document.body.classList.toggle("light-mode");
    main.classList.toggle("light-mode");
  });
};
mode();
