const display = document.getElementById("display");
const toggleButton = document.getElementById("toggleMode");
const body = document.body;

function clearDisplay() {
  display.value = "";
}

function addToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleButton.textContent = body.classList.contains("dark")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});
