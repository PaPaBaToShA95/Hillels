// src/redux/slices/hotelsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    bookingStatus: null
};

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        // Для завантаження готелів
        fetchHotelsRequest: (state) => {
            state.loading = 'loading';
        },
        fetchHotelsSuccess: (state, action) => {
            state.loading = 'succeeded';
            state.data = action.payload;
        },
        fetchHotelsFailure: (state, action) => {
            state.loading = 'failed';
            state.error = action.payload;
        },

        // Для бронювання готелю
        bookHotelRequest: (state) => {
            state.bookingStatus = 'loading';
        },
        bookHotelSuccess: (state, action) => {
            state.bookingStatus = 'succeeded';
            // Оновлюємо конкретний готель у масиві
            const index = state.data.findIndex(h => h.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        bookHotelFailure: (state, action) => {
            state.bookingStatus = 'failed';
            state.error = action.payload;
        }
    }
});

// Експортуємо всі actions
export const {
    fetchHotelsRequest,
    fetchHotelsSuccess,
    fetchHotelsFailure,
    bookHotelRequest,
    bookHotelSuccess,
    bookHotelFailure
} = hotelsSlice.actions;

export default hotelsSlice.reducer;