// Credit to https://www.w3schools.com/howto/howto_js_accordion.asp
// Get a collection of the accordion buttons
let accordions = document.getElementsByClassName("accordion");

// Cycle through accordion buttons
for (let i = 0; i < accordions.length; i++) {
  // Add event listeners
  accordions[i].addEventListener("click", function () {
    // Toggle the active class to switch button icons
    this.classList.toggle("active");

    // Get faq answer elements and check for open class
    let answer = this.nextElementSibling;
    let isOpen = answer.classList.contains("open");
    // Fade in/out text and open/close the accordion
    if (isOpen) {
      answer.classList.remove("open");
      answer.style.maxHeight = null;
    } else {
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
    this.setAttribute(
      "aria-expanded",
      answer.classList.contains("open") ? "true" : "false",
    );
  });
}
