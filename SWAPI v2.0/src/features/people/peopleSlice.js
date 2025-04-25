import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPerson } from '../../api/peopleAPI';

export const fetchPersonData = createAsyncThunk(
    'people/fetchPerson',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetchPerson(id);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
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
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonData.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPersonData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPersonData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to fetch person';
            });
    },
});

export const { clearPersonData } = peopleSlice.actions;
export default peopleSlice.reducer;
