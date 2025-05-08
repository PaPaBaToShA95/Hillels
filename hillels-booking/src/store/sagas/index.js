import { all } from 'redux-saga/effects';
import hotelSaga from './hotelSaga';

export default function* rootSaga() {
  yield all([hotelSaga()]);
}
