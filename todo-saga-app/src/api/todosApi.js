const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const fetchTodos = async () => {
    await delay(500);
    const response = await fetch('https://dummyjson.com/todos');
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Не вдалося завантажити завдання: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return data.todos;
};


export const addTodoApi = async (todoObjectFromSaga) => {
    await delay(300);
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo: todoObjectFromSaga.text,
            completed: todoObjectFromSaga.completed,
            userId: 1,
        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Не вдалося додати завдання: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return {
        id: data.id,
        text: todoObjectFromSaga.text,
        completed: data.completed,
    };
};


export const deleteTodoApi = async (id) => {
    await delay(300);
    const response = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Не вдалося видалити завдання: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return data.id;
};


export const updateTodoApi = async (todo) => {
    await delay(300);
    const response = await fetch(`https://dummyjson.com/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo: todo.text,
            completed: todo.completed,
        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Не вдалося оновити завдання: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return {
        id: data.id,
        text: data.todo,
        completed: data.completed,
    };
};

export const clearCompletedTodosApi = async () => {
    await delay(500);
    const todosFromApi = await fetchTodos();
    const completedIds = todosFromApi.filter(todo => todo.completed).map(todo => todo.id);
    return completedIds;
};