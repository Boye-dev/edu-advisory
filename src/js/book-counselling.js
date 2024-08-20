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

const tabsBook = document.querySelectorAll(".book .nav-item .nav-link");
const grids = document.querySelectorAll(".academic_grid");
let activeTabBook = tabsBook[0].innerText;

tabsBook.forEach((tab) => {
  if (tab.innerText === activeTabBook) {
    tab.classList.add("active");
    grids.forEach((item) => {
      if (item.id === activeTabBook) {
        item.style.display = "grid";
      }
    });
  }

  tab.addEventListener("click", (e) => {
    activeTabBook = e.target.innerText;
    handleClickBook(activeTabBook);
  });
});
const handleClickBook = (val) => {
  tabsBook.forEach((tab) => {
    if (tab.innerText === val) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }

    grids.forEach((item) => {
      if (item.id === val) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
  });
};
