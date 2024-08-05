const book_modal = document.querySelector("#book_appointment_modal");
const addresourcebButton = document.querySelector(".add_resource_button");

addresourcebButton.addEventListener("click", (e) => {
  book_modal.style.display = "flex";
  document.body.style.position = "fixed";
  document.body.style.overflowY = "scroll";
  document.body.style.width = "100%";
});
