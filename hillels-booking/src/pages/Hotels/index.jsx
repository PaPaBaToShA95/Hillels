import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsRequest } from '../../store/actions/hotelActions';
import SearchForm from '../../components/SearchForm';
import HotelCard from '../../components/HotelCard';

function HotelsPage() {
  const dispatch = useDispatch();

  const hotelsState = useSelector(state => state.hotels || {});
  const { loading, error, hotels = [] } = hotelsState;

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  if (loading) return <div className="text-center py-12">Завантаження...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Помилка: {error}</div>;

  return (
    <div>
      <SearchForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default HotelsPage;
