// Get a collection of the accordion buttons
let accordions = document.getElementsByClassName("accordion");

// Cycle through accordion buttons
for (let i = 0; i < accordions.length; i++) {
  // Add event listeners
  accordions[i].addEventListener("click", function () {
    // Get answer elements and switch display on click
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
