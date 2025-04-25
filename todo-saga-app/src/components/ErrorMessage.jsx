import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <div className="text-red-500 text-center mt-4">Помилка: {message}</div>;
};

export default ErrorMessage;
