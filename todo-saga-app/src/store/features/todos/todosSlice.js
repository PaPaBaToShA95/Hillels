import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        setTodos: (state, action) => {
            state.items = action.payload.map(item => ({
                id: item.id,
                text: item.todo,
                completed: item.completed,
            }));
        },
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.items.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearCompleted: (state) => {
            state.items = state.items.filter(todo => !todo.completed);
        }
    },
});

export const {
    setTodos,
    addTodo,
    removeTodo,
    updateTodo,
    setLoading,
    setError,
    clearCompleted
} = todosSlice.actions;

export default todosSlice.reducer;