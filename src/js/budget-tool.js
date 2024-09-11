let activeTab = 0;
let tabs = document.querySelectorAll(".budget_stepper_item_body");
const displayStepper = (prev, activeTab) => {
  const stepperBody = document.querySelector(
    `.budget_stepper_body #tab${activeTab}`
  );
  const stepperBodyPrev = document.querySelector(
    `.budget_stepper_body #tab${prev}`
  );
  if (stepperBody) {
    stepperBody.style.display = "contents";
    if (stepperBodyPrev) {
      stepperBodyPrev.style.display = "none";
    }
  }
};
const adjustButton = () => {
  switch (activeTab) {
    case 0:
      budget_prev_button.setAttribute("disabled", true);
      budget_next_button.style.display = "block";
      budget_next_button.innerText = "Next";
      break;
    case 1:
      budget_prev_button.removeAttribute("disabled");
      budget_next_button.style.display = "block";
      budget_next_button.innerText = "Next";
      break;
    case 2:
      budget_prev_button.removeAttribute("disabled");
      budget_next_button.style.display = "block";
      budget_next_button.innerText = "Next";
      break;
    case 3:
      budget_prev_button.removeAttribute("disabled");
      budget_next_button.style.display = "block";
      budget_next_button.innerText = "Finish";
      break;
    case 4:
      budget_prev_button.removeAttribute("disabled");
      budget_next_button.style.display = "none";
      break;
    default:
      break;
  }
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
    const prev = activeTab;

    activeTab = Number(e.currentTarget.id);
    adjustButton();
    displayStepper(prev, activeTab);

    showActivetabs(e.currentTarget);
  });
});

const budget_next_button = document.querySelector(".budget_next_button");
const budget_prev_button = document.querySelector(".budget_prev_button");
const budgetForm = document.getElementById("budgetForm");

displayStepper(null, activeTab);
adjustButton();

budget_next_button.addEventListener("click", (e) => {
  if (activeTab < 3) {
    const prev = activeTab;
    activeTab += 1;
    adjustButton();
    displayStepper(prev, activeTab);

    showActivetabs(e.currentTarget);
  } else {
    budgetForm.submit();
  }
});

budget_prev_button.addEventListener("click", (e) => {
  if (activeTab !== 0) {
    const prev = activeTab;

    activeTab -= 1;
    displayStepper(prev, activeTab);
    adjustButton();

    showActivetabs(e.currentTarget);
  }
});
