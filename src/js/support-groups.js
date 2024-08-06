const groups = document.querySelectorAll(".groups_box p");
const messages_box = document.querySelector(".messages_box");
const groups_box = document.querySelector(".groups_box");
const closeIcon = document.querySelector(".group_details i");

groups.forEach((group) => {
  group.addEventListener("click", () => {
    messages_box.classList.toggle("active_message");
    groups_box.classList.toggle("active_group");
  });
});

closeIcon.addEventListener("click", () => {
  messages_box.classList.toggle("active_message");
  groups_box.classList.toggle("active_group");
});
