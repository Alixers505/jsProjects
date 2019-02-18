let user = document.querySelector("form");
user.addEventListener("submit", function(event) {
    document.getElementById("welcome").innerHTML = "Hello, " + user.elements.name.value + "!";
    event.preventDefault();
});
