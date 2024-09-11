const modals = document.querySelectorAll(".modal");
if (modals) {
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      e.stopPropagation();
      if (Array.from(e.target.classList).includes("modal")) {
        modal.style.display = "none";
        document.body.style.position = "";
        document.body.style.overflowY = "";
        document.body.style.width = "";
      }
    });
  });
}

// const forms = document.querySelectorAll("form");
// if (forms) {
//   forms.forEach((form) => {
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//     });
//   });
// }
