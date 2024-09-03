const sideBarHamburger = document.getElementById("small_nav_hamburger_home");
const sidebar = document.querySelector(".small_nav");

sideBarHamburger.addEventListener("click", () => {
  sideBarHamburger.classList.toggle("fa-xmark");
  sideBarHamburger.classList.toggle("fa-bars");
  sidebar.classList.toggle("active_navbar");
});

const feedbackButton = document.getElementById("feedbackButton");
const feedbackModal = document.getElementById("feedbackModal");
const closeButton = document.getElementById("closeButton");

feedbackButton.onclick = function () {
  feedbackModal.style.display = "flex";
};

closeButton.onclick = function () {
  feedbackModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = "none";
  }
};
