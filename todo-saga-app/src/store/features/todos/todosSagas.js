import { call, put, takeEvery } from 'redux-saga/effects';
import { setTodos, addTodo, removeTodo, updateTodo, setLoading, setError, clearCompleted } from './todosSlice';
import { fetchTodos, addTodoApi, deleteTodoApi, updateTodoApi, clearCompletedTodosApi } from '../../../api/todosApi';
import { nanoid } from 'nanoid';
import { loadTodos, addTodoAsync, deleteTodoAsync, updateTodoAsync, clearCompletedAsync } from './todosActions';

function* loadTodosSaga() {
    yield put(setLoading(true));
    yield put(setError(null));
    try {
        const todos = yield call(fetchTodos);
        yield put(setTodos([...todos]));
    } catch (e) {
        console.error("loadTodosSaga: Error fetching todos:", e);
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
        console.error("addTodoSaga: Error adding todo:", e);
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
        const completedIds = yield call(clearCompletedTodosApi);
        for (const id of completedIds) {
            yield put(deleteTodoAsync(id));
        }
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(setLoading(false));
    }
}

export function* watchLoadTodos() {
    yield takeEvery(loadTodos().type, loadTodosSaga);
}

export function* watchAddTodo() {
    yield takeEvery(addTodoAsync('').type, addTodoSaga);
}

export function* watchDeleteTodo() {
    yield takeEvery(deleteTodoAsync('').type, deleteTodoSaga);
}

export function* watchUpdateTodo() {
    yield takeEvery(updateTodoAsync({}).type, updateTodoSaga);
}

export function* watchClearCompleted() {
    yield takeEvery(clearCompletedAsync().type, clearCompletedSaga);
}