const sideBarHamburger = document.getElementById("small_nav_hamburger_home");
const sidebar = document.querySelector(".small_nav");

sideBarHamburger.addEventListener("click", () => {
  sideBarHamburger.classList.toggle("fa-xmark");
  sideBarHamburger.classList.toggle("fa-bars");
  sidebar.classList.toggle("active_navbar");
});
