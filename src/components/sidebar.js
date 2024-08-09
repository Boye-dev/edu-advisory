const hamburger = document.getElementById("hamburger");
const sideBarHamburger = document.getElementById("sidebar_hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarItems = document.querySelectorAll(".sidebar a");
sidebarItems.forEach((item) => {
  if (location.href.slice(0, location.href.length - 1).includes(item.href)) {
    item.firstElementChild.style.color = "#621b40";
    item.firstElementChild.lastElementChild.style.fontWeight = "600";
  }
});
hamburger.addEventListener("click", () => {
  hamburger.classList.remove("fa-bars");
  hamburger.classList.add("fa-xmark");
  sideBarHamburger.classList.remove("fa-bars");
  sideBarHamburger.classList.add("fa-xmark");

  sidebar.classList.toggle("active");
});
sideBarHamburger.addEventListener("click", () => {
  hamburger.classList.remove("fa-xmark");
  hamburger.classList.add("fa-bars");
  sideBarHamburger.classList.remove("fa-xmark");
  sideBarHamburger.classList.add("fa-bars");
  sidebar.classList.toggle("active");
});
