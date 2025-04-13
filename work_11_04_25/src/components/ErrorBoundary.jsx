import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Помилка:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-red-600 dark:text-red-400">
          <h1 className="text-2xl font-bold">Щось пішло не так.</h1>
          <p>Будь ласка, оновіть сторінку або поверніться пізніше.</p>
          <p className="mt-4">
            Якщо проблема не зникне, будь ласка, зв'яжіться зі мною через{" "}
            <a
              href="https://t.me/papabarosha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Telegram
            </a>
            .
          </p>
          <p className="mt-4">
            <a
              href="/"
              className="text-blue-500 underline"
            >
              Повернутися на головну
            </a>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
