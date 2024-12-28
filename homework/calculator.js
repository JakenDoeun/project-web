const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Append text to the display
function appendToDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value; // Replace initial "0"
  } else {
    display.innerText += value;
  }
}

// Clear the entire display
function clearDisplay() {
  display.innerText = "0";
}

// Clear the last character from the display
function clearLastElement() {
  let text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}

// Evaluate the expression on the display
function calculateResult() {
  try {
    display.innerText = eval(display.innerText) || "0";
  } catch (error) {
    display.innerText = "Error";
    setTimeout(() => (display.innerText = "0"), 2000);
  }
}
