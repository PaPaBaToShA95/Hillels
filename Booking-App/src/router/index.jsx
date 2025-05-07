
import { createRoutesFromElements, Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home';
import HotelsListPage from '@/pages/HotelList';
import HotelDetailsPage from '@/pages/HotelDetails';
import NotFoundPage from '@/components/NotFound';
import MainLayout from '@/components/layouts/mainLayout';
import ErrorPage from '@/components/Errors';
import AboutPage from '@/pages/About';


export const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="hotels" element={<HotelsListPage />} />
    <Route path="hotels/:id" element={<HotelDetailsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
);


export const router = createBrowserRouter(routes);
