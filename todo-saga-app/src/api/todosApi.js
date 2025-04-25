const delay = (ms) => new Promise(res => setTimeout(res, ms));

const STORAGE_KEY = 'sagaTodos';

const getTodosFromStorage = () => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToStorage = (todosArray) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todosArray));
};

let todos = getTodosFromStorage();

export const fetchTodos = async () => {
    await delay(1500);
    return todos;
};

export const addTodoApi = async (todo) => {
    await delay(300);
    todos.push(todo);
    saveTodosToStorage(todos);
    return todo;
};

export const deleteTodoApi = async (id) => {
    await delay(300);
    todos = todos.filter(todo => todo.id !== id);
    saveTodosToStorage(todos);
    return id;
};

export const updateTodoApi = async (todo) => {
    await delay(300);
    todos = todos.map(item => (item.id === todo.id ? { ...item, ...todo } : item));
    saveTodosToStorage(todos);
    return todo;
};

export const clearCompletedTodosApi = async () => {
    await delay(300);
    const initialLength = todos.length;
    todos = todos.filter(todo => !todo.completed);
    saveTodosToStorage(todos);
    return initialLength - todos.length;
};