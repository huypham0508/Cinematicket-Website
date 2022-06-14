const mode = () => {
  const toggle = document.querySelector(".header-mode");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("is-mode");
  });
};
mode();
