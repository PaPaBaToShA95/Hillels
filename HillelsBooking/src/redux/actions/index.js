// Hotels actions
export const FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';

// Actions для завантаження одного готелю за ID
export const FETCH_HOTEL_BY_ID_REQUEST = 'FETCH_HOTEL_BY_ID_REQUEST';
export const FETCH_HOTEL_BY_ID_SUCCESS = 'FETCH_HOTEL_BY_ID_SUCCESS';
export const FETCH_HOTEL_BY_ID_FAILURE = 'FETCH_HOTEL_BY_ID_FAILURE';

export const fetchHotelsRequest = (params = {}) => ({
    type: FETCH_HOTELS_REQUEST,
    payload: params,
});

export const fetchHotelsSuccess = (hotels) => ({
    type: FETCH_HOTELS_SUCCESS,
    payload: hotels,
});

export const fetchHotelsFailure = (error) => ({
    type: FETCH_HOTELS_FAILURE,
    payload: error,
});

// Action creator для запиту одного готелю
export const fetchHotelByIdRequest = (hotelId) => ({
    type: FETCH_HOTEL_BY_ID_REQUEST,
    payload: hotelId,
});

export const fetchHotelByIdSuccess = (hotel) => ({
    type: FETCH_HOTEL_BY_ID_SUCCESS,
    payload: hotel,
});

export const fetchHotelByIdFailure = (error) => ({
    type: FETCH_HOTEL_BY_ID_FAILURE,
    payload: error,
});

// Можна також додати action для очищення currentHotel, якщо потрібно
// export const CLEAR_CURRENT_HOTEL = 'CLEAR_CURRENT_HOTEL';
// export const clearCurrentHotel = () => ({ type: CLEAR_CURRENT_HOTEL });