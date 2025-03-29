const apiUrl = 'http://localhost:5000/api/todos';

document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
});

document.getElementById('add-todo').addEventListener('click', async () => {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        const res = await fetch(`${apiUrl}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });
        const newTodo = await res.json();
        addTodoToList(newTodo);
        input.value = '';
    }
});

async function fetchTodos(filter = 'all') {
    let url = apiUrl;
    if (filter === 'completed') url += '?completed=true';
    else if (filter === 'deleted') url += '?deleted=true';

    try {
        const res = await fetch(url);
        const text = await res.text(); 
        console.log('Server response:', text);
        const todos = JSON.parse(text); 
        document.getElementById('todo-list').innerHTML = '';
        todos.forEach(addTodoToList);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function addTodoToList(todo) {
    const li = document.createElement('li');
    li.textContent = todo.text;

    if (todo.completed) li.classList.add('completed');
    if (todo.deleted) li.classList.add('deleted');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Відмітити як виконане';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
        markAsCompleted(todo._id);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        deleteTodo(todo._id);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(li);
}

async function markAsCompleted(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/todos/complete/${id}`, {
            method: 'PUT',
        });
        const updatedTodo = await res.json();
        console.log('Завдання відмічене як виконане', updatedTodo);
        fetchTodos();
    } catch (error) {
        console.error('Error marking as completed:', error);
    }
}

async function deleteTodo(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/todos/delete/${id}`, {
            method: 'DELETE',
        });
        const result = await res.json();
        console.log(result.message);
        fetchTodos();
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}
document.querySelectorAll('#filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        fetchTodos(filter); 
    });
});
