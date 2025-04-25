import { combineReducers } from 'redux';
import peopleReducer from '../features/people/peopleSlice';

const rootReducer = combineReducers({
    people: peopleReducer,
});

export default rootReducer;
