const addbtn = document.getElementById("addbtn");
const data = document.getElementById("input");
const taskList = document.getElementById("taskList");

addbtn.addEventListener('click', () => {
    const taskText = data.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    data.value = '';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(listItem); 
    });
})