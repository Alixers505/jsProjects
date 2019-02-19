// Create a countdown timer that counts down to your next birthday. 
// Requirements:
// Set an end date.
// Calculate time between now & then.
// Display the clock.
// Stop the clock & display a message once it reaches 0.

const birthday = new Date(2019, 11, 18).getTime();
// months start at 0
console.log(birthday);

// Update the countdown every 1 second
let count = setInterval(function() {
    const now = new Date().getTime();

    let time = birthday - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (time < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "This Timer Has Expired!";
      }    

}, 1000);