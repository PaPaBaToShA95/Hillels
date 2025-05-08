import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          p: 3,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mb: 4,
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '8px solid',
              borderColor: 'error.light',
              opacity: 0.2,
              animation: `${rotate} 8s linear infinite`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              border: '6px dashed',
              borderColor: 'error.main',
              opacity: 0.3,
              animation: `${rotate} 12s linear infinite reverse`,
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '6rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ff5252 30%, #ff1744 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1,
              animation: `${pulse} 2s infinite ease-in-out`,
            }}
          >
            404
          </Typography>
        </Box>

        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 2,
            fontWeight: 'medium',
            color: 'text-white',
          }}
        >
          Ой! Сторінку не знайдено
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: 'text-white',
            maxWidth: '400px',
          }}
        >
          Сторінка, яку ви шукаєте, могла бути видалена, перейменована або тимчасово недоступна.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            textTransform: 'none',
            boxShadow: 2,
            background: 'linear-gradient(45deg, #ff5252 30%, #ff1744 90%)',
            '&:hover': {
              boxShadow: 4,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Повернутися на головну
        </Button>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
