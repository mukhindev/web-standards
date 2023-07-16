const body = document.body;
const modeCheckbox = document.querySelector(".mode-checkbox");

modeCheckbox.addEventListener("change", (evt) => {
  if (evt.target.checked) {
    body.classList.add("body--dark-mode");
  } else {
    body.classList.remove("body--dark-mode");
  }
});
