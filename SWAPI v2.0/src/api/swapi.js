import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPerson = createAsyncThunk(
    'swapi/fetchPerson',
    async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch person');
        }
        return await response.json();
    }
);

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        person: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearPerson(state) {
            state.person = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerson.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPerson.fulfilled, (state, action) => {
                state.loading = false;
                state.person = action.payload;
            })
            .addCase(fetchPerson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearPerson } = swapiSlice.actions;
export default swapiSlice.reducer;
