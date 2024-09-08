const add = document.getElementById("add_button");
let delete_button = document.querySelectorAll("#delete_button");
const courses = document.getElementById("courses");
add.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  newDiv.id = `course[${courses.children.length}]`;
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.className = "mb-2";
  newDiv.innerHTML = `
  
      <input
      name="course[${courses.children.length}]"
                        type="text"
                        class="course_input_field"
                        placeholder="Enter course name"
                      />
                      <i
                      id="course[${courses.children.length}]"
                        class="fa-solid fa-trash delete_button_courses"
                        style="color: red; margin-left: 10px"
                      ></i>
                 
    `;
  courses.append(newDiv);
  delete_button = document.querySelectorAll(".delete_button_courses");
  delete_button.forEach((del) => {
    del.addEventListener("click", (e) => {
      let nodeToremove;
      courses.childNodes.forEach((item) => {
        if (item.id === del.id) {
          nodeToremove = item;
        }
      });

      courses.removeChild(nodeToremove);
    });
  });
});

delete_button.forEach((del) => {
  del.addEventListener("click", (e) => {
    let nodeToremove;
    courses.childNodes.forEach((item) => {
      if (item.id === del.id) {
        nodeToremove = item;
      }
    });

    courses.removeChild(nodeToremove);
  });
});
