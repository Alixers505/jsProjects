"use strict";

// Perform the audio action when key is pressed
function soundCheck(event) {
  // Define audio based on event
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // Define key based on event
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  // Do nothing if audio doesn't exist
  if (!audio) return;
  // Reset audio so that the same key can be played multiple times in a row
  audio.currentTime = 0;
  // Play audio based on data-key
  audio.play();
  key.classList.add("playing");  
}

function removeTransition(event) {
  // remove "playing" once transform ends
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// Find elements with "key" class
const keys = document.querySelectorAll('.key');
// Loop over the keys and add a listener to know when the transform has ended
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


// Detect when a user is typing and call the function
document.addEventListener('keydown', soundCheck);