// Find and define all inputs
const inputs = document.getElementsByClassName(.controls input);

// Create a function to target the changes to the inputs
// Create variable to check for sizing, using dataset
// Look for the names of the variables
// Set new value for the variables based on events, documentElement, set property
// Append sizing to the variables
function variableUpdate(e) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listen for events on the inputs, both change and mousemove
// link to the function
inputs.forEach(input => input.addEventListener("change", variableUpdate));
inputs.forEach(input => input.addEventListener("mousemove", variableUpdate));