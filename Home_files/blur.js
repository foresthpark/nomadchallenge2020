const nameInput = document.querySelector(".input-name"),
  searchInput = document.querySelector(".input-search"),
  todoInput = document.querySelector(".input-todo");

function handleSearchFocus(e) {
  if (e.type === "focus") {
    e.target.placeholder = "";
  } else if (e.type === "blur") {
    e.target.placeholder = "Google in search";
  }
}

function handleTodoFocus(e) {
  if (e.type === "focus") {
    e.target.placeholder = "";
  } else if (e.type === "blur") {
    e.target.placeholder = "Write a to do";
  }
}

function handleNameFocus(e) {
  if (e.type === "focus") {
    e.target.placeholder = "";
  } else if (e.type === "blur") {
    e.target.placeholder = "What is your name?";
  }
}

function init() {
  searchInput.addEventListener("focus", handleSearchFocus);
  searchInput.addEventListener("blur", handleSearchFocus);
  todoInput.addEventListener("focus", handleTodoFocus);
  todoInput.addEventListener("blur", handleTodoFocus);
  nameInput.addEventListener("focus", handleNameFocus);
  nameInput.addEventListener("blur", handleNameFocus);
}

init();