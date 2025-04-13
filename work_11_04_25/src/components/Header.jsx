import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <nav className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-xl text-blue-300 ">
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );
}
