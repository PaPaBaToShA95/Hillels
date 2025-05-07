import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[75vh]  from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-extrabold mb-4 text-red-800 animate-pulse">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Сторінку не знайдено</h2>
      <p className="mb-6 text-gray-300 max-w-md text-center">
        Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-lg transition duration-300"
      >
        Повернутись на головну
      </Link>
    </div>
  );
};

export default NotFound;
