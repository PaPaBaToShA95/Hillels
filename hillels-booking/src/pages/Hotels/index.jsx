import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsRequest } from '@/store/actions/hotelActions';
import SearchForm from '@/components/SearchForm';
import HotelCard from '@/components/HotelCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function HotelsPage() {
  const dispatch = useDispatch();

  const hotelsState = useSelector(state => state.hotels || {});
  const { loading, error, hotels = [] } = hotelsState;

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h6">Завантаження...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 6, color: 'error.main' }}>
        <Typography variant="h6">Помилка: {error}</Typography>
      </Box>
    );
  }

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
