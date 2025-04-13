import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Сторінку не знайдено</p>
      <Link to="/" className="text-blue-500 underline">
        Повернутись на головну
      </Link>
    </div>
  );
}
