let taskInput = document.querySelector('#taskInput');
let addButton = document.querySelector('#addButton');
let taskCounter = document.querySelector('#taskCounter');
let taskList = document.querySelector('#taskList');

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task');

    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function () {
        li.classList.toggle('done');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
        const updatedText = prompt('Змініть завдання', span.textContent);

        if (updatedText === null) {
            return;
        }

        if (updatedText.trim() === '') {
            alert('Завдання не може бути порожнім');
            return;
        }

        span.textContent = updatedText.trim();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        li.remove();
        taskCounter.textContent = taskList.children.length;
    });

    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);
    taskInput.value = '';
    taskCounter.textContent = taskList.children.length;
}

addButton.addEventListener('click', addTask);
