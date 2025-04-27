import { all } from 'redux-saga/effects';
import { watchLoadTodos, watchAddTodo, watchDeleteTodo, watchUpdateTodo, watchClearCompleted } from '../store/features/todos/todosSagas';

export default function* rootSaga() {
    yield all([
        watchLoadTodos(),
        watchAddTodo(),
        watchDeleteTodo(),
        watchUpdateTodo(),
        watchClearCompleted(),
    ]);
}