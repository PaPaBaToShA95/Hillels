import { takeLatest, call, put, all } from 'redux-saga/effects'; // Додано 'all'
import {
    FETCH_HOTELS_REQUEST,
    fetchHotelsSuccess,
    fetchHotelsFailure,
    FETCH_HOTEL_BY_ID_REQUEST, // Новий action type
    fetchHotelByIdSuccess,     // Новий action creator
    fetchHotelByIdFailure,     // Новий action creator
} from '@/redux/actions';
// Імпортуємо функції API
import { getHotels, getHotelById } from '@/api/hotelsApi'; // Будемо імпортувати нову функцію API

// Saga для завантаження списку готелів (із можливою фільтрацією)
function* fetchHotelsSaga(action) {
    try {
        const params = action.payload;
        const hotels = yield call(getHotels, params); // Викликаємо API з параметрами
        yield put(fetchHotelsSuccess(hotels));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

// *** Нова Saga для завантаження ОДНОГО готелю за ID ***
function* fetchHotelByIdSaga(action) {
    try {
        const hotelId = action.payload; // ID готелю з action
        const hotel = yield call(getHotelById, hotelId); // Викликаємо API для одного готелю
        yield put(fetchHotelByIdSuccess(hotel));
    } catch (error) {
        yield put(fetchHotelByIdFailure(error.message));
    }
}
// ******************************************************


function* hotelsSaga() {
    yield all([ // Використовуйте 'all' для запуску кількох watcher-ів одночасно
        takeLatest(FETCH_HOTELS_REQUEST, fetchHotelsSaga), // Watcher для завантаження списку
        takeLatest(FETCH_HOTEL_BY_ID_REQUEST, fetchHotelByIdSaga), // *** Новий watcher для завантаження одного готелю ***
    ]);
}

export default hotelsSaga;