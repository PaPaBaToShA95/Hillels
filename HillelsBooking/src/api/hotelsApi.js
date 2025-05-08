import api from './axiosInstance';

export const getHotels = async (params = {}) => {
    try {
        // params можуть включати location, price_gte, price_lte
        const response = await api.get('/hotels', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

// *** Додано: Функція для отримання одного готелю за ID ***
export const getHotelById = async (id) => {
    try {
        const response = await api.get(`/hotels/${id}`); // Запит до /hotels/1, /hotels/2 тощо
        return response.data;
    } catch (error) {
        console.error(`Error fetching hotel with ID ${id}:`, error);
        throw error;
    }
};