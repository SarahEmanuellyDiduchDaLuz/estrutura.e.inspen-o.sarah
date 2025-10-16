const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function createTaskItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remover';
  deleteBtn.className = 'delete-btn';
  deleteBtn.type = 'button';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const text = taskInput.value.trim();

  if (!text) return; 

  const li = createTaskItem(text);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();

taskList.addEventListener('click', function(e) {
  const li = e.target.closest('li');
  if (!li) return;
 }

if (e.target.classList.contains ('delete-btn')) {
  li.remove();
  return; 
 }

if (e.target.tagName === 'SPAN') {
  li.classList.toggle('completed');
 }
});