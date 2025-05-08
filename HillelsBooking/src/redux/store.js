import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Імпортуємо функцію створення історії та middleware
import { createReduxHistory, routerMiddleware } from '@/router/history';

import { rootReducer } from './reducers';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware];

// Налаштування для Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Створення Redux стору
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

// Запускаємо саги
sagaMiddleware.run(rootSaga);

// *** Викликаємо функцію createReduxHistory ПІСЛЯ створення стору ***
// Це стандартне місце для отримання history об'єкта, який пов'язаний зі стором.
const history = createReduxHistory(store); // <-- Цей рядок має виконатись успішно після створення стору

// Експортуємо store ТА створений history об'єкт
export { store, history };