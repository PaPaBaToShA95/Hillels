// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import hotelsReducer from './slicer/hotelSlicer'; // ✅ Виправлено шлях до редюсера

// Створюємо контекст для маршрутизатора з підтримкою історії
const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({
    history: createBrowserHistory(),         // Створюємо browserHistory
    reduxTravelling: true,                   // Синхронізація між store <-> router
    savePreviousLocations: 1                 // Зберігає попереднє місце
});

// Конфігуруємо store з підтримкою middleware і devtools
export const store = configureStore({
    reducer: {
        hotels: hotelsReducer,                 // Основний slice для готелів
        router: routerReducer,                 // Підключаємо reducer з маршрутизатором
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['router/onLocationChanged'],  // Ігноруємо несеріалізовану дію
                ignoredPaths: ['router.location']              // Ігноруємо частину стану
            }
        }),
        routerMiddleware                         // Підключаємо middleware маршрутизатора
    ],
    devTools: import.meta.env.DEV              // Показує DevTools тільки у DEV-режимі
});

// Історія, яку можна використати в Router компоненті
export const history = createReduxHistory(store);
