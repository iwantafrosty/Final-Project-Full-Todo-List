let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;

        if (todo.complete) {
            todoItem.classList.add('completed');
        }

        const checkButton = document.createElement('button');
        checkButton.textContent = '✓';
        checkButton.addEventListener('click', () => {
            toggleTodoComplete(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        todoItem.appendChild(checkButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

function addTodo(text) {
    todos.push({ text, complete: false });
    renderTodos();
}

function toggleTodoComplete(index) {
    todos[index].complete = !todos[index].complete;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = '';
    }
});

renderTodos();
