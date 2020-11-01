//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});

window.addEventListener("scroll", function () {
  let windowsPosition = window.scrollY > 0;
  header.classList.toggle("active", window.scrollY > 0);
});

// window.addEventListener("scroll", () => console.log(window.scrollY));
