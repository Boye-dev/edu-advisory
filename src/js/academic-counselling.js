const book_modal = document.querySelector("#book_appointment_modal");
const bookButtons = document.querySelectorAll(".book_appointment");

bookButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    book_modal.style.display = "flex";
    document.body.style.position = "fixed";
    document.body.style.overflowY = "scroll";
    document.body.style.width = "100%";
  });
});
