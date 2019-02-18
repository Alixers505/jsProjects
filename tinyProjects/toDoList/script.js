// Define Parts
let tasks = new Array;

let taskAdd = document.getElementById("add").addEventListener('click', add);
let listItem = document.addEventListener('click', completed);

const ol = document.getElementById("taskList");

// Declare Function to "add" tasks
function add() {
    const li = document.createElement("li");
    let newTask = document.getElementById("taskAdd").value;
    let taskText = document.createTextNode(newTask);

    li.appendChild(taskText);

    ol.appendChild(li);
}


// Declare Function to mark tasks as "completed"

function completed() {
    
}

