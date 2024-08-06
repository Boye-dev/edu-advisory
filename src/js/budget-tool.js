const urlParams = new URLSearchParams(window.location.search);
let tab = urlParams.get("activeTab");

if (!tab) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("activeTab", "0");
  window.location.search = urlParams;
} else {
  console.log(Number.isNaN(tab));
  if (Number(tab) > 4 || Number(tab) < 0 || Number.isNaN(Number(tab))) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("activeTab", "0");
    window.location.search = urlParams;
  }
}
let activeTab = Number(tab) || 0;
let tabs = document.querySelectorAll(".budget_stepper_item_body");
const displayStepper = (activeTab) => {
  const stepperBody = document.querySelector(
    `.budget_stepper_body #tab${activeTab}`
  );
  if (stepperBody) stepperBody.style.display = "contents";
};

const designTabs = (tab) => {
  if (Number(tab.id) < activeTab) {
    const numberElement = tab.firstElementChild.firstElementChild;
    const newText = document.createElement("div");
    newText.innerHTML = '<i class="fa-solid fa-check" style="color:white"></i>';
    numberElement.style.backgroundColor = "var(--primary-color-dark)";

    numberElement.replaceChild(newText, numberElement.firstChild);
  } else {
    const numberElement = tab.firstElementChild.firstElementChild;
    const newText = document.createTextNode(Number(tab.id) + 1);
    numberElement.style.backgroundColor = "white";

    numberElement.replaceChild(newText, numberElement.firstChild);
  }
  if (Number(tab.id) === activeTab) {
    const numberElement = tab.firstElementChild.firstElementChild;
    const textElement = tab.children[1].firstElementChild;
    numberElement.style.border = "3px solid var(--primary-color-dark)";
    numberElement.style.color = "var(--primary-color-dark)";
    numberElement.style.fontWeight = 600;
    textElement.style.color = "var(--primary-color-dark)";
    textElement.style.fontWeight = 600;
  } else {
    const numberElement = tab.firstElementChild.firstElementChild;
    const textElement = tab.children[1].firstElementChild;
    numberElement.style.border = "1px solid black";
    numberElement.style.color = "black";
    numberElement.style.fontWeight = "normal";
    textElement.style.color = "black";
    textElement.style.fontWeight = "normal";
  }
  if (Number(tab.id) > activeTab) {
    const numberElement = tab.firstElementChild.firstElementChild;
    const textElement = tab.children[1].firstElementChild;
    numberElement.style.border = "1px solid lightgrey";

    numberElement.style.backgroundColor = "lightgrey";
    textElement.style.color = "lightgrey";
  }
};
const showActivetabs = () => {
  tabs.forEach((tab) => {
    designTabs(tab);
  });
};

tabs.forEach((tab) => {
  designTabs(tab);

  tab.addEventListener("click", (e) => {
    e.stopPropagation();
    activeTab = Number(e.currentTarget.id);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("activeTab", activeTab);
    window.location.search = urlParams;
    showActivetabs(e.currentTarget);
  });
});
displayStepper(activeTab);

const budget_next_button = document.querySelector(".budget_next_button");
const budget_prev_button = document.querySelector(".budget_prev_button");

budget_next_button.addEventListener("click", () => {
  if (activeTab < 4) {
    activeTab += 1;
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("activeTab", activeTab);
    window.location.search = urlParams;
    showActivetabs(e.currentTarget);
  }
});
if (activeTab === 0) {
  budget_prev_button.setAttribute("disabled", true);
}
if (activeTab === 3) {
  budget_next_button.innerText = "Finish";
}
if (activeTab === 4) {
  budget_next_button.style.display = "none";
}
budget_prev_button.addEventListener("click", (e) => {
  if (activeTab !== 0) {
    activeTab -= 1;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("activeTab", activeTab);
    window.location.search = urlParams;
    showActivetabs(e.currentTarget);
  }
});
