const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function createTaskItem(text) {
    const li= document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const deteleBtn = document.createElement('button');
    deteleBtn.textContent = 'Remover';
    deteleBtn.className = 'delete-btn';
    deteleBtn.type = 'button';
    li.appendChild(span);
    li.appendChild(deteleBtn);
    return li;
}

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = taskInput.ariaValueMax.trim();
  if (!text) return;
  const li = 
}