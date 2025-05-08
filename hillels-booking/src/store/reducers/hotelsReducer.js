const initialState = {
  loading: false,
  hotels: [],
  error: null,
};

export default function hotelsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_HOTELS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_HOTELS_SUCCESS':
      return { ...state, loading: false, hotels: action.payload };
    case 'FETCH_HOTELS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'BOOK_HOTEL_SUCCESS':
      return {
        ...state,
        hotels: state.hotels.map(hotel =>
          hotel.id === action.payload.id ? action.payload : hotel,
        ),
      };
    default:
      return state;
  }
}
