const inputs = document.querySelectorAll(".input");

function focusFunc() {
  this.parentNode.classList.add("focus");
}

function blurFunc() {
  if (this.value === "") {
    this.parentNode.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);

  // Add focus class if input already has value on page load
  if (input.value !== "") {
    input.parentNode.classList.add("focus");
  }
})