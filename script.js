
const tasks = [];

const displayTasks = () => {
    const tasksContainer = document.getElementById("tasks-container");
    const messageEl = document.getElementById("message");

    if (tasks.length === 0) {
        messageEl.classList.remove("d-none")
    }else {
        messageEl.classList.add("d-none")
    }
    tasksContainer.innerHTML = '';

    for (let index = 0 ; index < tasks.length; index++) {
        tasksContainer.innerHTML += `
                                <div class="alert alert-light d-flex justify-content-between mb-2 align-items-center" role = "alert">
                                        <span>${tasks[index]}</span>
                                        <button class="btn btn-danger btn-sm" onclick = "deleteTask(${index})" >Delete Task</button>
                                </div>
                                `;

    }
}

const addTask = () => {
    const taskInputEl = document.getElementById("taskInput");
    const inputValue = taskInputEl.value.trim();

    if (inputValue.length === 0){
        alert("Task should be enetered");

        return;
    }


    tasks.push(inputValue);
    console.log(tasks);
    taskInputEl.value = '';

    displayTasks();
}

const deleteTask = (index) => {
    console.log(index);
    tasks.splice(index, 1)
    displayTasks()
}
