import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPerson } from './peopleAPI';

export const fetchPersonData = createAsyncThunk(
    'people/fetchPerson',
    async (id) => {
        const response = await fetchPerson(id);
        return response;
    }
);

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        data: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        clearPersonData: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPersonData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPersonData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { clearPersonData } = peopleSlice.actions;
export default peopleSlice.reducer;
