const body = document.body;
const modeCheckbox = document.querySelector(".mode-checkbox");

console.log(modeCheckbox);

modeCheckbox.addEventListener("change", (evt) => {
  console.log(evt.target.checked);
  if (evt.target.checked) {
    body.classList.add("body--dark-mode");
  } else {
    body.classList.remove("body--dark-mode");
  }
});
