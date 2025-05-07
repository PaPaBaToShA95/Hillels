import { combineReducers } from '@reduxjs/toolkit';
import hotelsReducer from './features/hotels/hotelsSlice'

export const rootReducer = combineReducers({
    hotels: hotelsReducer,
});
