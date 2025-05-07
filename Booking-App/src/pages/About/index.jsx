const AboutPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Про проєкт</h2>

      <p className="text-white text-lg mb-6 leading-relaxed">
        <strong>HillelsBooking</strong> — це сучасний, мінімалістичний додаток для перегляду
        готелів, створений мною, <strong>Олексієм Ермантраутом</strong>, у межах дипломного проєкту
        на курсі Frontend-розробки. Його мета — забезпечити швидкий, інтуїтивно зрозумілий інтерфейс
        для пошуку та перегляду готелів.
      </p>

      <p className="text-white text-lg mb-6 leading-relaxed">
        Хоча цей проєкт навчальний, я прагнув створити його максимально наближеним до умов реального
        комерційного застосування — з правильною архітектурою, модульністю, повторним використанням
        компонентів і дотриманням принципів чистого коду.
      </p>

      <h3 className="text-xl font-semibold text-yellow-300 mb-3">🔧 Технології:</h3>
      <ul className="list-disc list-inside text-white text-base mb-6 space-y-1">
        <li>
          ⚛️ <strong>Create React App</strong> — офіційний стартовий шаблон для проєктів на React
        </li>
        <li>
          🌐 <strong>React Router</strong> — маршрутизація сторінок через{' '}
          <code>createBrowserRouter</code>
        </li>
        <li>
          ✍️ <strong>React Final Form</strong> — керування формами з валідацією та зручним API
        </li>
        <li>
          📡 <strong>Axios</strong> — запити до API (у нашому випадку — до{' '}
          <strong>json-server</strong>)
        </li>
        <li>
          📦 <strong>Redux</strong> — централізоване сховище стану додатку
        </li>
        <li>
          🧭 <strong>Redux-First History</strong> — інтеграція історії навігації з Redux
        </li>
        <li>
          🔁 <strong>Redux-Saga</strong> — керування побічними ефектами (запити, таймери, обробка
          подій)
        </li>
        <li>
          🔐 <strong>.env</strong> — зберігання конфіденційних даних і змінних середовища
        </li>
        <li>
          🧼 <strong>ESLint</strong> — лінтинг JavaScript-коду згідно з обраними правилами
        </li>
        <li>
          🗄️ <strong>json-server</strong> — фейковий backend для тестування API
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-yellow-300 mb-3">🎯 Чому цей проєкт важливий:</h3>
      <p className="text-white text-lg mb-6 leading-relaxed">
        У багатьох туторіалах часто упускають важливі речі: структурування файлів, організацію
        логіки, підключення стилізаційних інструментів чи оптимізацію. У цьому проєкті я врахував
        усе — від масштабованості до гнучкості. Тут немає випадкових рішень — кожен компонент має
        своє чітке місце та призначення.
      </p>

      <h3 className="text-xl font-semibold text-yellow-300 mb-3">👨‍💻 Автор проєкту:</h3>
      <p className="text-white text-lg leading-relaxed">
        Мене звати <strong>Олексій Ермантраут</strong>. Я Frontend-розробник, який захоплюється
        чистим кодом, продуманими інтерфейсами та системним підходом до проєктування. Цей проєкт —
        підсумок мого навчання та водночас місток у професійний світ. Якщо ви читаєте це — значить
        ми вже на шляху до зростання. 🚀
      </p>
    </section>
  );
};

export default AboutPage;
