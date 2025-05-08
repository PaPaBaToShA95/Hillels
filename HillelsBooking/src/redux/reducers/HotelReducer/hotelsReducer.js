import {
    FETCH_HOTELS_REQUEST,
    FETCH_HOTELS_SUCCESS,
    FETCH_HOTELS_FAILURE,
    FETCH_HOTEL_BY_ID_REQUEST, // Новий action type
    FETCH_HOTEL_BY_ID_SUCCESS, // Новий action type
    FETCH_HOTEL_BY_ID_FAILURE, // Новий action type
    // CLEAR_CURRENT_HOTEL, // Якщо додали action очищення
} from '@/redux/actions';

const initialState = {
    list: [], // Список готелів (для сторінки всіх готелів/пошуку)
    currentHotel: null, // *** Додано: для деталей одного готелю ***
    loading: false,
    error: null,
};

const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Обробка завантаження списку готелів
        case FETCH_HOTELS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload,
                // Можливо, очищати currentHotel при завантаженні списку? Залежить від UX.
                // currentHotel: null,
            };
        case FETCH_HOTELS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // *** Обробка завантаження ОДНОГО готелю за ID ***
        case FETCH_HOTEL_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                currentHotel: null, // Очищаємо попередній готель при новому запиті
            };
        case FETCH_HOTEL_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                currentHotel: action.payload, // Зберігаємо завантажений готель
                // Можливо, очищати список при завантаженні одного готелю? Залежить від UX.
                // list: [],
            };
        case FETCH_HOTEL_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentHotel: null, // Очищаємо готель при помилці
            };

        // case CLEAR_CURRENT_HOTEL: // Якщо додали action очищення
        //     return {
        //         ...state,
        //         currentHotel: null,
        //     };

        default:
            return state;
    }
};

export default hotelsReducer;