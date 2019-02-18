const resultBox = document.getElementById("result");
var flip = document.querySelector("form");
flip.addEventListener("submit", function(event) {
    resultBox.classList.remove("loss");
    resultBox.classList.remove("wow");
    var random = Math.random();
    var result = "Standing on the edge! How did that happen?";;

    if (random > 0.5 && random < 0.9) {
        result = "You Won!";
    } else if (random < 0.5 && random > 0.1) {
        result = "You Lost!";
        resultBox.classList.add("loss");
    } else {
        resultBox.classList.add("wow");
    }

    resultBox.innerHTML = result;
    event.preventDefault();
});