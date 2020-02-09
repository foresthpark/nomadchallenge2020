const searchForm = document.querySelector(".js-searchForm");

function handleSearch(e) {
  e.preventDefault();
  const currentValue = searchInput.value;
  location.href = "https://www.google.com/search?q=" + currentValue;
  searchForm.value = "";
}

function init() {
  searchForm.addEventListener("submit", handleSearch);
}

init();