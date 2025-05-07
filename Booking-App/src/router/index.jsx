import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layouts/mainLayout';
import HomePage from '@/pages/Home';
import HotelsListPage from '@/pages/HotelList';
import HotelDetailsPage from '@/pages/HotelDetails';
import AboutPage from '@/pages/About';
import NotFound from '@/components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hotels', element: <HotelsListPage /> },
      { path: 'hotels/:id', element: <HotelDetailsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },

]);
