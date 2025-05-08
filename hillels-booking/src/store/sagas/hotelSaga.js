import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_HOTELS_REQUEST,
  BOOK_HOTEL_REQUEST,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  bookHotelSuccess,
  bookHotelFailure,
} from '../actions/hotelActions';

function* fetchHotels(action) {
  try {
    const values = action.payload && typeof action.payload === 'object' ? action.payload : {};
    const { location, price, stars } = values;
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (price) params.append('price_lte', price);
    if (stars) params.append('stars_gte', stars);
    const url = `/api/hotels${params.toString() ? `?${params.toString()}` : ''}`;

    const response = yield call(axios.get, url);
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

function* bookHotel(action) {
  try {
    const id = action.payload;
    const response = yield call(axios.patch, `/api/hotels/${id}`, { booked: true });
    yield put(bookHotelSuccess(response.data));
  } catch (error) {
    yield put(bookHotelFailure(error.message));
  }
}

export default function* hotelSaga() {
  yield takeLatest(FETCH_HOTELS_REQUEST, fetchHotels);
  yield takeLatest(BOOK_HOTEL_REQUEST, bookHotel);
}
