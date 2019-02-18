// Find and define all the .panel

const panels = document.querySelectorAll(".panel");

// Create a function to add the "open" class when those panels are toggled

function toggleOpen() {
    this.classList.toggle("open");
}

// Create a function to target the propertyname which is transitioning (multiple transitions -- flex-grow)

function toggleTarget(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

// Add event listener forEach of the .panel

panels.forEach(panel => panel.addEventListener("click", toggleOpen));

// Add an event listener forEach of the .panel, transition end, toggle active

panels.forEach(panel => panel.addEventListener("transitionend", toggleTarget));
