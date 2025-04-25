import { call, put, takeEvery } from 'redux-saga/effects';
import { setTodos, addTodo, removeTodo, updateTodo, setLoading, setError, clearCompleted } from '../features/todos/todosSlice';
import { fetchTodos, addTodoApi, deleteTodoApi, updateTodoApi, clearCompletedTodosApi } from '../api/todosApi';
import { nanoid } from 'nanoid';

function* loadTodosSaga() {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        const todos = yield call(fetchTodos);
        yield put(setTodos([...todos]));
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

function* addTodoSaga(action) {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        const newTodo = {
            id: nanoid(),
            text: action.payload,
            completed: false,
        };
        const addedTodo = yield call(addTodoApi, newTodo);
        yield put(addTodo(addedTodo));
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

function* deleteTodoSaga(action) {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        const id = action.payload;
        const deletedId = yield call(deleteTodoApi, id);
        yield put(removeTodo(deletedId));
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

function* updateTodoSaga(action) {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        const updatedTodo = yield call(updateTodoApi, action.payload);
        yield put(updateTodo(updatedTodo));
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

function* clearCompletedSaga() {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        yield call(clearCompletedTodosApi);
        yield put(clearCompleted());
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

export function* watchLoadTodos() {
    yield takeEvery('todos/loadTodos', loadTodosSaga);
}

export function* watchAddTodo() {
    yield takeEvery('todos/addTodoAsync', addTodoSaga);
}

export function* watchDeleteTodo() {
    yield takeEvery('todos/deleteTodoAsync', deleteTodoSaga);
}

export function* watchUpdateTodo() {
    yield takeEvery('todos/updateTodoAsync', updateTodoSaga);
}

export function* watchClearCompleted() {
    yield takeEvery('todos/clearCompletedAsync', clearCompletedSaga);
}

export const loadTodos = () => ({ type: 'todos/loadTodos' });
export const addTodoAsync = (text) => ({ type: 'todos/addTodoAsync', payload: text });
export const deleteTodoAsync = (id) => ({ type: 'todos/deleteTodoAsync', payload: id });
export const updateTodoAsync = (todo) => ({ type: 'todos/updateTodoAsync', payload: todo });
export const clearCompletedAsync = () => ({ type: 'todos/clearCompletedAsync' });