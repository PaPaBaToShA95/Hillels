import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHotelDetails, bookHotel } from '../../redux/slicer/hotelSlicer';
import clsx from 'clsx';

const HotelDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bookingInProgress, setBookingInProgress] = useState(false);

  const hotel = useSelector(state => state.hotels.currentHotel);
  const loading = useSelector(state => state.hotels.loading);

  useEffect(() => {
    dispatch(fetchHotelDetails(id));
    return () => {
      dispatch({ type: 'hotels/clearCurrentHotel' });
    };
  }, [dispatch, id]);

  const handleBooking = async () => {
    if (!hotel || hotel.booked) return;
    try {
      setBookingInProgress(true);
      await dispatch(bookHotel(hotel.id)).unwrap();
    } catch (error) {
      console.error('Error while booking:', error);
    } finally {
      setBookingInProgress(false);
    }
  };

  if (loading === 'loading') {
    return <p className="text-center text-yellow-400">Завантаження...</p>;
  }

  if (!hotel || String(hotel.id) !== id) {
    return <p className="text-center text-red-400">Готель за цим запитом не знайдено</p>;
  }

  return (
    <section className="flex flex-col gap-6">
      <button
        onClick={() => navigate('/hotels')}
        aria-label="Повернутись до списку готелів"
        className="text-yellow-400 hover:underline self-start"
      >
        ← Повернутись до списку готелів
      </button>

      <img src={hotel.image} alt={hotel.title} className="w-full h-96 object-cover rounded-lg" />

      <div>
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">{hotel.title}</h2>
        <p className="text-gray-400 mb-2">{hotel.location}</p>
        <p className="text-yellow-300 font-semibold text-xl mb-4">₴{hotel.price} / ніч</p>
        <p className="text-white text-lg leading-relaxed">{hotel.description}</p>
      </div>

      <button
        onClick={handleBooking}
        disabled={hotel.booked || bookingInProgress}
        className={clsx(
          'mt-4 w-full py-3 text-lg font-bold rounded transition',
          hotel.booked
            ? 'bg-gray-700 text-gray-400 !cursor-not-allowed'
            : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300',
        )}
      >
        {hotel.booked ? 'Готель заброньовано' : bookingInProgress ? 'Бронювання...' : 'Забронювати'}
      </button>
    </section>
  );
};

export default HotelDetailsPage;
