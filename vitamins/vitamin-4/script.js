/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened")
      sidebarButton.innerHTML = "›";
    } else {
      // Open the sidebar
      sidebar.classList.add("opened")
      sidebarButton.innerHTML = "‹";
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", (event) => {
    // Create li element, set its text content, and append child to the ul parent
    const listElement = document.createElement("li");
    listElement.textContent = taskName.value;
    todoListUl.appendChild(listElement);
    taskName.value = ""; // Clear input after adding
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = __YOUR_CODE_HERE__;
  const lastNameInput = __YOUR_CODE_HERE__;
  const message = __YOUR_CODE_HERE__;

  const updateMessage = () => {
    /** YOUR CODE HERE */
  };

  /** YOUR CODE HERE */
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
