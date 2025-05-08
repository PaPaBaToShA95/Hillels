import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <div
      className="bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-blue-500 cursor-pointer"
      onClick={handleClick}
    >
      <img src={hotel.image} alt={hotel.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl text-blue-400 font-bold mb-2">{hotel.title}</h3>
        <p className="text-blue-300 mb-2">{hotel.location}</p>
        <div className="flex items-center mb-4">
          <p className="text-blue-300 mr-2">Рейтинг:</p>
          <Rating value={hotel.stars} precision={0.5} readOnly />
        </div>
        <p className="text-blue-300 font-bold mb-4">₴{hotel.price}/нічь</p>
        <Link to={`/hotels/${hotel.id}`}>
          <Button variant="outlined">Детальніше</Button>
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
