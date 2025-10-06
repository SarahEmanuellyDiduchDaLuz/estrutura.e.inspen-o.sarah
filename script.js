const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Função que cria um item da lista
function createTaskItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remover';
  deleteBtn.className = 'delete-btn';
  deleteBtn.type = 'button';

  // Quando clicar no botão "Remover", apaga o item
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
});
