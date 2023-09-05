document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        }
    });
});