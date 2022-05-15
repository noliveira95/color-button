// Set initial count
let count = 0;

// Select value and buttons
let value = document.querySelector("#value");
let buttons = document.querySelectorAll(".btn");

// Loop over each button, addEventListener and get class list
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;
    // Increments/decrements based on what button is clicked
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    // Changes the color of count
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
