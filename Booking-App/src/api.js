import axios from 'axios';

// Базова URL для API - вказуємо адресу json-server
const API_BASE_URL = 'http://localhost:4000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Функція для отримання списку готелів
// json-server надає ресурс /hotels
export const getHotels = async () => {
    try {
        const response = await api.get('/hotels'); // Шлях змінено на /hotels
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

// Функція для бронювання готелю
// json-server дозволяє оновити ресурс (готель) за його ID
// Ми будемо використовувати PATCH запит, щоб оновити тільки поле 'booked'
// Ця функція тепер очікує hotelId як аргумент
export const bookHotel = async (hotelId) => {
    try {
        // Відправляємо PATCH запит на /hotels/:id з тілом { booked: true }
        const response = await api.patch(`/hotels/${hotelId}`, { booked: true });
        // json-server повертає оновлений об'єкт
        return response.data;
    } catch (error) {
        console.error(`Error booking hotel ${hotelId}:`, error);
        throw error;
    }
};

// Функція для скасування бронювання
// Аналогічно, використовуємо PATCH запит для оновлення поля 'booked'
// Ця функція тепер очікує hotelId як аргумент
export const cancelBooking = async (hotelId) => {
    console.warn(`Attempting to cancel booking for hotel ID: ${hotelId}`); // Попередження залишаємо, якщо логіка не повна на фронтенді
    try {
        // Відправляємо PATCH запит на /hotels/:id з тілом { booked: false }
        const response = await api.patch(`/hotels/${hotelId}`, { booked: false });
        // json-server повертає оновлений об'єкт
        return response.data;
    } catch (error) {
        console.error(`Error cancelling booking for hotel ${hotelId}:`, error);
        throw error;
    }
};

// Функція для отримання одного готелю за ID (опціонально, якщо потрібно)
// json-server надає ресурс /hotels/:id
export const getHotelById = async (hotelId) => {
    try {
        const response = await api.get(`/hotels/${hotelId}`);
        return response.data; // Повертає один об'єкт готелю
    } catch (error) {
        console.error(`Error fetching hotel by ID ${hotelId}:`, error);
        throw error;
    }
};

// Функція для отримання бронювань користувача (якщо вони зберігаються окремо або можна фільтрувати)
// Якщо бронювання - це просто поле `booked` у готелі, то ця функція не потрібна,
// або вона може просто викликати `getHotels` і фільтрувати результат на фронтенді.
// json-server підтримує фільтрацію: http://localhost:4000/hotels?booked=true
export const getUserBookings = async () => {
    try {
        // Приклад фільтрації: отримати тільки готелі, де booked=true
        const response = await api.get('/hotels', {
            params: {
                booked: true // Фільтруємо за параметром booked=true
            }
        });
        return response.data; // Повертає масив заброньованих готелів
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        throw error;
    }
};