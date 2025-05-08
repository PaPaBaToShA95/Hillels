import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const darkGrey700 = '#374151';
const blue400 = '#60A5FA';
const blue300 = '#93C5FD';

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: darkGrey700,
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 0px 12px 5px #60A5FA',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia component="img" width="192" image={hotel.image} alt={hotel.title} />

      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: blue400,
            fontWeight: 'bold',
            mb: 1,
            fontSize: '1.5rem',
          }}
        >
          "{hotel.title}"
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: blue300,
            mb: 1,
          }}
        >
          м.{hotel.location}
        </Typography>

        <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: blue300,
              mr: 1,
            }}
          >
            Рейтинг:
          </Typography>
          <Rating value={hotel.stars} precision={0.5} readOnly sx={{ color: blue400 }} />
        </Stack>

        <Typography
          variant="body1"
          sx={{
            color: blue300,
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          ₴{hotel.price}/нічь
        </Typography>

        <Button
          variant="outlined"
          component={Link}
          to={`/hotels/${hotel.id}`}
          sx={{
            borderColor: blue400,
            color: blue400,
            '&:hover': {
              borderColor: blue300,
              color: blue300,
              backgroundColor: 'rgba(96, 165, 250, 0.08)',
            },
          }}
        >
          Детальніше
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
