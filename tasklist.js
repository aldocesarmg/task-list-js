const buttonAddTask = document.getElementById('ADD_TASK');
const tasksList = document.getElementById('TASKS-SECTION');

buttonAddTask.addEventListener('click', ()=> {
    let inputTaskText = document.getElementById('taskInput');
    let newTaskText = inputTaskText.value;

    if (newTaskText == '') return;

    // Creating the new elements
    const newDivContainer = document.createElement('div');
    const newTask = document.createElement('p');
    const newDeleteButton = document.createElement('button');

    // Setting the text of the task and the button
    const newTaskContent = document.createTextNode(newTaskText);
    const newButtonContent = document.createTextNode('Eliminar');

    // Setting the style
    newDivContainer.setAttribute("class", "single-task-container");
    newTask.setAttribute("class", "task-text");
    newDeleteButton.setAttribute("class", "delete-button")

    newTask.appendChild(newTaskContent);
    newDeleteButton.appendChild(newButtonContent);

    newDeleteButton.addEventListener('click', ()=> {
        newDivContainer.remove();
    });

    newDivContainer.appendChild(newTask);
    newDivContainer.appendChild(newDeleteButton);

    // Add the node
    tasksList.appendChild(newDivContainer);

    // Reset the value
    inputTaskText.value = '';
});