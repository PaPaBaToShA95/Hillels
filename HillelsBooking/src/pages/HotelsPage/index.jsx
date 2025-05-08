import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../api/axiosInstance';
import HotelCard from './components/hotelCard';
import clsx from 'clsx';
import loadingAnimation from '@/assets/loading.gif';

const HotelsListPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true); 

      try {

        const [response] = await Promise.all([
          api.get('/hotels'),
          new Promise(resolve => setTimeout(resolve, 5000)), 
        ]);

        setHotels(response.data); 
      } catch (error) {
        console.error('Error while fetching hotels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const location = searchParams.get('location')?.toLowerCase() || '';
  const priceFrom = parseInt(searchParams.get('priceFrom')) || 0;
  const priceTo = parseInt(searchParams.get('priceTo')) || Infinity;

  const filteredHotels = hotels.filter(hotel => {
    const matchLocation = hotel.location.toLowerCase().includes(location);
    const matchPrice = hotel.price >= priceFrom && hotel.price <= priceTo;
    return matchLocation && matchPrice;
  });

  if (loading) {
   return <div className="flex  flex-col gap-4 justify-center items-center min-h-[75vh]">
    <img  src={loadingAnimation} alt="loading" />
    <span className="ml-2">Пошук доступних готелів...</span>
   </div>;
  } 

  if (!filteredHotels.length) {
    return <p className="text-center text-gray-400">Нажаль за вашими критеріями нічого не знайдено</p>;
  }

  return (
    <section>
      {!!searchParams.size && (
        <button
          className="text-yelow-400 hover:underline self-start mb-6"
          onClick={() => setSearchParams('')}
        >
          Очистити фільтри
        </button>
      )}

      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Доступні готелі</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <HotelCard key={hotel.id} {...hotel} className={clsx(hotel.booked && 'grayscale')} />
        ))}
      </div>
    </section>
  );
};

export default HotelsListPage;
