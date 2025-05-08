import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import HotelsPage from './pages/Hotels';
import HotelDetailsPage from './pages/HotelDetails';
import AboutPage from './pages/About';

function App() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
