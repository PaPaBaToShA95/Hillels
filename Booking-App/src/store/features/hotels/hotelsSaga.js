import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchHotelsRequest,
    fetchHotelsSuccess,
    fetchHotelsFailure,
} from './hotelsSlice';

// заміни на свою API-функцію
function fetchHotelsApi(params) {
    return fetch(`/api/hotels?${params}`).then(res => res.json());
}

function* fetchHotelsWorker(action) {
    try {
        const data = yield call(fetchHotelsApi, action.payload);
        yield put(fetchHotelsSuccess(data));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

export default function* hotelsSaga() {
    yield takeLatest(fetchHotelsRequest.type, fetchHotelsWorker);
}
