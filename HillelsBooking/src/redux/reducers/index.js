import { combineReducers } from 'redux';
import { routerReducer } from '@/router/history';

import hotelsReducer from './HotelReducer/hotelsReducer';

const rootReducer = combineReducers({
    router: routerReducer, 
    hotels: hotelsReducer,
});

export { rootReducer }; 