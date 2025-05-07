import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { history } from '@/router/history';

import hotelsReducer from './features/hotels/hotelsSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} = createReduxHistoryContext({ history });

export const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels: hotelsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const reduxHistory = createReduxHistory(store);
