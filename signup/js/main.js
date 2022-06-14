const change = () => {
  const toogle = document.querySelector(".signin-button");
  const showNewButton = document.querySelector(".signin-active");
  const showOldButton = document.querySelector(".signin-bottom");
  const toogleClose = document.querySelector(".signin-close");
  toogle.addEventListener("click", () => {
    showNewButton.classList.toggle("is-show");
    showOldButton.classList.toggle("is-show");
  });
  toogleClose.addEventListener("click", () => {
    showNewButton.classList.toggle("is-show");
    showOldButton.classList.toggle("is-show");
  });
};
change();
