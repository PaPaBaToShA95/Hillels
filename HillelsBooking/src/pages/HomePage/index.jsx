import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Вітаємо в Hillels Booking!</h1>
      <p>Знайдіть готель своєї мрії за найкращою ціною.</p>
      <p>
        <Link to="/search">Перейти до пошуку готелів</Link> або{" "}
        <Link to="/hotels">Переглянути всі готелі</Link>.
      </p>
    </div>
  );
}

export default HomePage;
