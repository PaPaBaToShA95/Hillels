export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';
export const BOOK_HOTEL_REQUEST = 'BOOK_HOTEL_REQUEST';
export const BOOK_HOTEL_SUCCESS = 'BOOK_HOTEL_SUCCESS';
export const BOOK_HOTEL_FAILURE = 'BOOK_HOTEL_FAILURE';

export const fetchHotelsRequest = values => ({
  type: FETCH_HOTELS_REQUEST,
  payload: values,
});

export const fetchHotelsSuccess = hotels => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = error => ({
  type: FETCH_HOTELS_FAILURE,
  payload: error,
});

export const bookHotelRequest = id => ({
  type: BOOK_HOTEL_REQUEST,
  payload: id,
});

export const bookHotelSuccess = hotel => ({
  type: BOOK_HOTEL_SUCCESS,
  payload: hotel,
});

export const bookHotelFailure = error => ({
  type: BOOK_HOTEL_FAILURE,
  payload: error,
});
