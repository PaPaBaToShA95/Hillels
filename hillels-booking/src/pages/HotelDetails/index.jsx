import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bookHotelRequest, fetchHotelsRequest } from '@/store/actions/hotelActions';
import { toast } from 'react-hot-toast';

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const darkGrey800 = '#2D3748';
const blue600 = '#2563EB';
const blue400 = '#60A5FA';
const lightGrey200 = '#E5E7EB';
const darkGrey700 = '#374151';

function HotelDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector(state => state.hotels);

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

  const hotel = hotels.find(h => h.id === id);
  if (!hotel) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h6">Готель не знайдено</Typography>
      </Box>
    );
  }

  const handleBook = () => {
    dispatch(bookHotelRequest(id));
    toast.success('Hotel booked successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Card sx={{ borderRadius: 3 }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={hotel.image}
              alt={hotel.title}
              sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent sx={{ p: 3, backgroundColor: darkGrey800 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ color: blue600, fontWeight: 'bold', mb: 1 }}
              >
                {hotel.title}
              </Typography>
              <Typography variant="body1" sx={{ color: blue400, mb: 2 }}>
                м.{hotel.location}
              </Typography>
              <Typography variant="h5" sx={{ color: blue400, fontWeight: 'bold', mb: 3 }}>
                ₴{hotel.price}/нічь
              </Typography>
              <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ color: blue400, mr: 1 }}>
                  Рейтинг:
                </Typography>
                <Rating value={hotel.stars} precision={0.5} readOnly sx={{ color: blue400 }} />
              </Stack>
              <Typography variant="body1" sx={{ color: blue400, mb: 4 }}>
                {hotel.description}
              </Typography>

              {hotel.booked ? (
                <Box
                  sx={{
                    backgroundColor: lightGrey200,
                    color: darkGrey700,
                    px: 2,
                    py: 1,
                    borderRadius: 0.5,
                    display: 'inline-block',
                  }}
                >
                  Вже заброньовано
                </Box>
              ) : (
                <Button onClick={handleBook} variant="contained">
                  Забронювати
                </Button>
              )}

              <Button
                variant="text"
                component={Link}
                to="/hotels"
                sx={{
                  ml: 2,
                  color: blue600,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Повернутися до списку готелів
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default HotelDetailsPage;
