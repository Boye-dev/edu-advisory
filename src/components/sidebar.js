class SideBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="sidebar active">
      <div class="siddebar_logo">
      <div style="display: flex">
        <img src="../src/images/logo.png" width="70px" h="100%" />
        <p>Study Pathway</p>
      </div>

        <i
        class="fa-solid fa-bars"
        style="font-size: 30px;cursor:pointer"
        id="sidebar_hamburger"
      ></i>
      </div>
      <p>EDUCATIONAL ADVISORY</p>
      <a href="/academic-counselling" style="color:black">
      <div class="sidebar_items">
      <i class="fa-solid fa-person-chalkboard"></i>
        <p>Counselling</p>
      </div>
      </a>
      <a href="/course-selection" style="color:black">
      <div class="sidebar_items">
      <i class="fa-solid fa-book"></i>
        <p>​Course Selection</p>
      </div>
      </a>
      <a href="/resource-library" style="color:black">
      <div class="sidebar_items">
      <i class="fa-solid fa-file"></i>
        <p>Resource Library</p>
      </div>
      </a>

      <p>FINANCIAL ADVISORY</p>
      <a href="/budgeting-tools" style="color:black">
      <div class="sidebar_items">
      <i class="fa-solid fa-money-bill"></i>
        <p>Budgeting Tools</p>
      </div>
      </a>
      <a href="/scholarships-and-grants" style="color:black">
      <div class="sidebar_items">
      <i class="fa-brands fa-google-scholar"></i>
        <p>Scholarship & Grant</p>
      </div>
      </a>
      <a href="/student-loan" style="color:black">
      <div class="sidebar_items">
      <i class="fa-solid fa-landmark"></i>
        <p>Student Loan Advice</p>
      </div>
      </a>
      <p>MENTAL HEALTH SUPPORT</p>
     
      <div class="sidebar_items">
      <i class="fa-solid fa-people-group"></i>
        <p>Peer Support Groups</p>
      </div>
    

      <p>SETTINGS</p>
      <div class="sidebar_items">
      <i class="fa-solid fa-user"></i>
        <p>Profile</p>
      </div>
      <div class="sidebar_items">
      <i class="fa-solid fa-right-from-bracket"></i>
      <a href="/login" style="color:black">

        <p>Logout</p>
        </a>
      </div>
    </div>
          `;
  }
}

customElements.define("my-sidebar", SideBar);

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="sidebar_navbar">
    <div class="sidebar_navbar_flex">
      <div class="sidebar_navbar_profile">
        <img src="../src/images/background.jpeg" />
        <p>Oyelola Adeboye</p>
      </div>
      <i
        class="fa-solid fa-bars"
        style="font-size: 30px;cursor:pointer"
        id="hamburger"
      ></i>
    </div>
  </div>
          `;
  }
}

customElements.define("my-navbar", NavBar);

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
