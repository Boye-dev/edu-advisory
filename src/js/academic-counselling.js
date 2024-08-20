const tabs = document.querySelectorAll(".counsellors .nav-item .nav-link");
const tbody = document.querySelectorAll("tbody");

let activeTab = tabs[0].innerText;

tabs.forEach((tab) => {
  if (tab.innerText === activeTab) {
    tab.classList.add("active");
    tbody.forEach((item) => {
      if (item.id === activeTab.toLowerCase()) {
        item.style.display = "contents";
      }
    });
  }

  tab.addEventListener("click", (e) => {
    activeTab = e.target.innerText;
    handleClick(activeTab);
    console.log(activeTab);
  });
});
const handleClick = (val) => {
  tabs.forEach((tab) => {
    if (tab.innerText === val) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }

    tbody.forEach((item) => {
      if (item.id === val.toLowerCase()) {
        item.style.display = "contents";
      } else {
        item.style.display = "none";
      }
    });
  });
};
