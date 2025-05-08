import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const darkGrey700 = '#374151';
const darkGrey800 = '#2D3748';
const white = '#FFFFFF';
const blueShadow = '0px 0px 8px 3px #60A5FA';

function HomePage() {
  return (
    <Box>
      <Box
        component="section"
        sx={{
          backgroundColor: darkGrey700,
          color: white,
          py: 10,
          mb: 6,
          borderRadius: 1.5,
          mx: { xs: 2, md: 'auto' },
          maxWidth: { md: 'lg' },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, md: 'unset' } }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Ласкаво просимо до HillelsBooking
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Знайди кращі готелі у своєму місті за найкращими цінами
          </Typography>
          <Button variant="contained" component={Link} to="/hotels">
            Перейти до готелів
          </Button>
        </Container>
      </Box>

      <Box component="section" sx={{ mb: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '1.875rem' },
            }}
          >
            Чому саме ми?
          </Typography>
          <Grid container spacing={10} justifyContent={'center'}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: darkGrey800,
                  p: 3,
                  borderRadius: 1,
                  boxShadow: blueShadow,
                  color: white,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.25rem' }}
                >
                  Найкраща ціна
                </Typography>
                <Typography variant="body1" component="p">
                  Ми пропонуємо найкращі ціни на готелі у твоєму місті та регулярні знижки і акції!
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: darkGrey800,
                  p: 3,
                  borderRadius: 1,
                  boxShadow: blueShadow,
                  color: white,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 1.5, fontSize: '1.25rem' }}
                >
                  Широкий вибір
                </Typography>
                <Typography variant="body1" component="p">
                  Ми пропонуємо широкий вибір готелів по всій Україні та за її межами!
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: darkGrey800,
                  p: 3,
                  borderRadius: 1,
                  boxShadow: blueShadow,
                  color: white,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 2, fontSize: '1.25rem', alignContent: 'center' }}
                >
                  Проста та безпечна процедура
                </Typography>
                <Typography variant="body1" component="p">
                  Ми пропонуємо просту та безпечну процедуру бронювання готелю всього за один клік.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
