import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bookHotelRequest, fetchHotelsRequest } from '../../store/actions/hotelActions';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function HotelDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector(state => state.hotels);

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  if (loading) return <div className="text-center py-12">Завантаження...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Помилка: {error}</div>;

  const hotel = hotels.find(h => h.id === id);
  if (!hotel) return <div className="text-center py-12">Готель не знайдено</div>;

  const handleBook = () => {
    dispatch(bookHotelRequest(id));
    toast.success('Hotel booked successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <img src={hotel.image} alt={hotel.title} className="w-full h-96 object-cover" />
        <div className="p-6 bg-gray-800">
          <h1 className="text-3xl text-blue-600 font-bold mb-2">{hotel.title}</h1>
          <p className="text-blue-400 mb-4">{hotel.location}</p>
          <p className="text-blue-400 text-2xl font-bold mb-6">₴{hotel.price}/нічь</p>
          <div className="flex items-center mb-4">
            <p className="text-blue-400 mr-2">Рейтинг:</p>
            <Rating value={hotel.stars} precision={0.5} readOnly />
          </div>
          <p className="text-blue-400 text-xl mb-8">{hotel.description}</p>

          {hotel.booked ? (
            <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded inline-block">
              Вже заброньовано
            </div>
          ) : (
            <Button onClick={handleBook} variant="contained">
              Забронювати
            </Button>
          )}

          <Link to="/hotels" className="ml-4 text-blue-600 hover:underline">
            <Button variant="text">Повернутися до списку готелів</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailsPage;
