
import React from 'react';

function Errors({ error, errorInfo }) {


  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
      <h2>Ой! Щось пішло не так.</h2>
      <p>Ми вже працюємо над виправленням цієї проблеми.</p>
        <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
          <summary>Деталі помилки</summary>
          <p>{error && error.toString()}</p>
          <div>{errorInfo && errorInfo.componentStack}</div>
        </details>
      <button onClick={() => window.location.reload()} style={{ marginTop: '20px' }}>
        Перезавантажити сторінку
      </button>
    </div>
  );
}

export default Errors;
