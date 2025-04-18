import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list.push(action.payload)
        },
    },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
