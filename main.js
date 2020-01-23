let todoList = document.querySelector('ul');
let todoInput = document.querySelector('.todoInput');
let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];

// Armazera no localStorage
function addToStorage() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// Adiciona um novo to-do
function addTodo(event) {
  event.preventDefault();

  todoItems.push(todoInput.value);

  todoInput.value = '';

  addToStorage();
  loadTodos();
}

// Carrega os to-dos
function loadTodos() {
  todoList.innerHTML = '';

  for (item of todoItems) {
    let pos = todoItems.indexOf(item);

    let li = document.createElement('li');
    li.innerHTML = item;

    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('onclick', 'removeTodo(' + pos + ')');
    link.innerHTML = 'Excluir';

    li.appendChild(link);
    todoList.appendChild(li);
  }
}

// Remove um to-do
function removeTodo(pos) {
  todoItems.splice(pos, 1);

  addToStorage();
  loadTodos();
}

loadTodos();
