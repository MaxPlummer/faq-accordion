// Credit to https://www.w3schools.com/howto/howto_js_accordion.asp
// Get a collection of the accordion buttons
let accordions = document.getElementsByClassName("accordion");

// Cycle through accordion buttons
for (let i = 0; i < accordions.length; i++) {
  // Add event listeners
  accordions[i].addEventListener("click", function () {
    // Toggle the active class to switch button icons
    this.classList.toggle("active");
    // Get answer elements and switch display on click
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      // maxHeight is calculated by the scrollHeight of the answer
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}
