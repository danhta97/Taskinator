var buttonEL = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var formEL = document.querySelector("#task-form");

var createTaskHandler = function(event) {
   
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']");
    console.log(taskNameInput);

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";    
    listItemEl.textContent = "This is a new Task.";
    tasksToDoEl.appendChild(listItemEl);
};

formEL.addEventListener("submit", createTaskHandler);

buttonEL.addEventListener("click", createTaskHandler);