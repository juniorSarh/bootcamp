// get an element

const addTaskBtn = document.getElementById('addTaskbtn');
const taskInput = document.getElementById('task-input');
const todoTasks = document.getElementById('todoTasks');
const clearTasks = document.getElementById('ClearTasksBtn')

// style the element

addTaskBtn.style.backgroundColor = "green";
addTaskBtn.style.color= "white";
addTaskBtn.style.cursor = "pointer"



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

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        taskCard.appendChild(deleteBtn)

    function deleteTask(taskId){
        if(confirm('are you sure you want to delete a task')){
            tasks = tasks.filter((task)=> task.id !== taskId);

            getAllTasks()
            console.log('Task deleted')
        }
        else{
            console.log('task delete cancelled')
        }
    }
    deleteBtn.addEventListener('click',()=> deleteTask(task.id))
    

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
        id: Date.now(),
        title: title
    }
    tasks.push(newTask)

    taskInput.value= ""

    getAllTasks();

    console.log("task created", newTask)
}

addTaskBtn.addEventListener("click", addTask)

// delete all tasks

function clearAllTasks(){
if(confirm('are you sure you want clear all tasks')){
    tasks= [];
    getAllTasks();
    console.log('all the tasks cleared')
}
else{
    console.log('clear tasks cancelled')
}
}

clearTasks.addEventListener('click', clearAllTasks)