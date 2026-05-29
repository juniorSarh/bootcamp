// get an element

const addTaskBtn = document.getElementById('addTaskbtn');
const taskInput = document.getElementById('task-input');
const todoTasks = document.getElementById('todoTasks');


let tasks = []

function getAllTasks() {
    todoTasks.innerHTML = ""

    tasks.forEach((task) => {
        const taskCard = document.createElement('div');

        taskCard.classList.add('task')
        taskCard.innerHTML = `
        <p> ${task.title}</p>
        `;
        todoTasks.appendChild(taskCard)
    })
    console.log('tasks avaliable', tasks)
}

getAllTasks()


// create a task

function addTask()
{
    const title = taskInput.value.trim()

    if(!title) return;

    const newTask = {
        title: title
    }
    tasks.push(newTask)

    taskInput.value= ""

    getAllTasks();

    console.log("task created", newTask)
}

addTaskBtn.addEventListener("click", addTask)