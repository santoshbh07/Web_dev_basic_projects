let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let box = document.querySelector(".box");
let clear = document.getElementById("clear");

function addTasks() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.append(listItem);
        box.style.display = "flex";
        taskInput.value = "";
        listItem.addEventListener("click", function () {
            this.classList.toggle("completed");
        });
        clear.style.display = "block";
    } else {
        alert("Please enter a task!");
    }
}

addTask.addEventListener("click", (addTasks));

clear.addEventListener("click", function() {
    taskList.innerText = "";
    box.style.display = "none";
    clear.style.display = "none";
});