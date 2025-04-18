import { createSlice } from "@reduxjs/toolkit";

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const initialState = {
    list: savedTodos,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state.list));
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
