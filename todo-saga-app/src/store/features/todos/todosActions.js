export const loadTodos = () => ({ type: 'todos/loadTodos' });
export const addTodoAsync = (text) => ({ type: 'todos/addTodoAsync', payload: text });
export const deleteTodoAsync = (id) => ({ type: 'todos/deleteTodoAsync', payload: id });
export const updateTodoAsync = (todo) => ({ type: 'todos/updateTodoAsync', payload: todo });
export const clearCompletedAsync = () => ({ type: 'todos/clearCompletedAsync' });