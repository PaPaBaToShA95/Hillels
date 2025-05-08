import React from "react";

function AboutPage() {
  return (
    <div>
      <h1>Про проект Hillels Booking</h1>
      <p>
        Цей проект створено як демонстраційний додаток для курсу Hillels React
        Pro.
      </p>
      <p>
        Він демонструє використання основних технологій: React, Vite,
        React-router, React-final-form, Axios, Redux, Redux-first-history,
        Redux-saga, ENV, ESLint та Json-server.
      </p>
      <p>
        Додаток дозволяє переглядати список готелів, здійснювати пошук за
        критеріями та додавати готелі до кошика для подальшого бронювання
        (імітація).
      </p>
    </div>
  );
}

export default AboutPage;
