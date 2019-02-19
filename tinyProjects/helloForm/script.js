(function() {

  const user = document.getElementById("nameRequest");
  const pageResponse = document.getElementById("response");
  const userName = document.getElementById("nameInput");

  user.addEventListener("submit", function(event) {
    event.preventDefault();
    let userNameInput = userName.value;

    if (userNameInput.trim() === '') {
      alert("Please enter your name");
    } else {
      pageResponse.innerHTML = "Hello, " + userNameInput + "!";
    }

    /* setTimeout( function () {
      userName.value = '';
      pageResponse.innerHTML = '';
    }, 5000); */

  });

})();
