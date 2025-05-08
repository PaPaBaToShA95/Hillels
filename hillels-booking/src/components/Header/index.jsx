import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.png';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
  return (
    <header className="bg-gray-800 text-xl text-white shadow-md rounded-b-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-10 " />
        </NavLink>
        <Box component="nav">
          <Stack direction="row" spacing={2}>
            <Button
              component={NavLink}
              to="/"
              variant="outlined"
              color="inherit"
              sx={{
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                },

                '&.active': {
                  color: '#60A5FA',
                },
              }}
            >
              Домашня сторінка
            </Button>

            <Button
              component={NavLink}
              to="/hotels"
              variant="outlined"
              color="inherit"
              sx={{
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                },
                '&.active': {
                  color: '#60A5FA',
                },
              }}
            >
              Готелі
            </Button>

            <Button
              component={NavLink}
              to="/about"
              variant="outlined"
              color="inherit"
              sx={{
                textTransform: 'none',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  backgroundColor: 'transparent',
                },
                '&.active': {
                  color: '#60A5FA',
                },
              }}
            >
              Про Нас
            </Button>
          </Stack>
        </Box>
      </div>
    </header>
  );
}

export default Header;
