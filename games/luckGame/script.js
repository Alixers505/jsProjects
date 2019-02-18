const resultBox = document.getElementById("result");
const flip = document.querySelector("form");
let result = '';
flip.addEventListener("click", function(event) {
  event.preventDefault();

  let random = Math.random();
  result = "Flipping...";
  resultBox.innerHTML = result;
  //console.log(result);

  resultBox.classList.remove("loss");
  resultBox.classList.remove("wow");
  resultBox.classList.remove("win");

  setTimeout(function() {

    if (random > 0.5 && random < 0.9) {
      result = "You Won!";
      resultBox.classList.add("win");
    } else if (random < 0.5 && random > 0.1) {
      resultBox.classList.add("loss");
      result = "You Lost!";
    } else {
      resultBox.classList.add("wow");
      result = "Wow, it's standing on its edge!";
    }

    //console.log(result);
    resultBox.innerHTML = result;
  }, 500);

});