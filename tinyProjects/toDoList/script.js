(function() {

  // Define Parts
  let tasks = new Array;
  const orderedList = document.getElementById("taskList");
  const taskButton = document.getElementById("addBtn");
  const newTask = document.getElementById("newTask");

  let listItem = document.addEventListener('click', markCompleted);

  // Listen for click
  taskButton.addEventListener('click', function(event) {
    event.preventDefault();
    addTask();
  });

  // Declare Function to "add" tasks
  function addTask() {
    const li = document.createElement("li");
    let taskText = document.createTextNode(newTask.value);

    orderedList.appendChild(li).append(taskText);

    newTask.value = '';
  }

  // Declare Function to remove task from list
  function removeTask() {

  }

  // Declare Function to mark tasks as "completed"

  function markCompleted() {

  }

})();



