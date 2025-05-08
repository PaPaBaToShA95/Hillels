import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div>
      <section className="bg-gray-700 text-white py-20 mb-12 rounded-xl">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-4xl font-bold mb-4">Ласкаво просимо до HillelsBooking</h1>
          <p className="text-xl mb-8">Знайди кращі готелі у своїму місті за найкращими цінами</p>
          <Link to="/hotels">
            <Button variant="contained">Перейти до готелів</Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Чому саме ми?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-blue-500">
            <h3 className="text-xl text-white font-semibold mb-3 text-center">Найкраща ціна</h3>
            <p className="text-white text-center">
              Ми пропонуємо найкращі ціни на готелі у твоєму місті.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-blue-500">
            <h3 className="text-xl text-white font-semibold mb-3 text-center">Широкий вибір</h3>
            <p className="text-white text-center">
              Ми пропонуємо широкий вибір готелів по всій Україні та за її межами!
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-blue-500">
            <h3 className="text-xl text-white font-semibold mb-3 text-center">
              Проста та безпечна процедура
            </h3>
            <p className="text-white text-center">
              Ми пропонуємо просту та безпечну процедуру бронювання готелю всього за один клік.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
