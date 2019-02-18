
// Find and define .second-hand
const secondHand = document.querySelector('.second-hand');
// Find and define .minute-hand
const minuteHand = document.querySelector('.minute-hand');
// Find and define .hour-hand
const hourHand = document.querySelector('.hour-hand');

// Create a function to set the date
function setDate() {
    // Define the current date (time)
    const now = new Date();
    // Define the current seconds (seconds now)
    const seconds = now.getSeconds();
    // Define the degrees (angle) at which the seconds are displayed
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Transform the defined .second-hand to the specified degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Define the current minutes (minutes now)
    const minutes = now.getMinutes();
    // Define the degrees (angle) at which the minutes are displayed
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // Transform the defined .minute-hand to the specified degrees
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Define the current hours (hours now)
    const hours = now.getHours();
    // Define the degrees (angle) at which the hours are displayed
    const hoursDegrees = ((hours / 12) * 360) + 90;
    // Transform the defined .hour-hand to the specified degrees
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;    
}

setInterval(setDate, 1000);