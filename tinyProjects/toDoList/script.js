(function() {
// Define Parts
  let tasks = new Array;
  const unorderedList = document.getElementById("taskList");
  const taskButton = document.getElementById("addBtn");
  const newTaskInput = document.getElementById("newTask");

  // Add Task
  taskButton.addEventListener('click', function(event) {
    event.preventDefault();

    if(newTaskInput.value.trim() === '') {
      alert("Please enter a task to add to the list.");
    } else {
      const li = document.createElement("li");
      const iconElement = document.createElement("i");

      iconElement.classList.add('fas', 'fa-trash-alt');
      iconElement.addEventListener('click', removeTask);
      unorderedList.appendChild(li).append(iconElement, newTaskInput.value);

      newTaskInput.value = '';
      //console.log("event added");
    }

  });

  // Remove task

  function removeTask() {
    this.parentElement.remove();
    //console.log("event removed");
  }


})();