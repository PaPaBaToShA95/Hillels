import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hotels: [],
    loading: false,
    error: null,
};

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        fetchHotelsRequest(state, action) {
            state.loading = true;
        },
        fetchHotelsSuccess(state, action) {
            state.hotels = action.payload;
            state.loading = false;
        },
        fetchHotelsFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    fetchHotelsRequest,
    fetchHotelsSuccess,
    fetchHotelsFailure,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
