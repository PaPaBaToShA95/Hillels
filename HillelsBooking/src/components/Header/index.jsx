import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#007bff",
        padding: "10px 20px",
        color: "white",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Hillels Booking
        </div>
        <ul
          style={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}
        >
          <li style={{ marginLeft: "20px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#cccccc" : "white",
                textDecoration: "none",
                fontSize: "1.1rem",
              })}
            >
              Головна
            </NavLink>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <NavLink
              to="/search"
              style={({ isActive }) => ({
                color: isActive ? "#cccccc" : "white",
                textDecoration: "none",
                fontSize: "1.1rem",
              })}
            >
              Пошук
            </NavLink>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <NavLink
              to="/hotels"
              style={({ isActive }) => ({
                color: isActive ? "#cccccc" : "white",
                textDecoration: "none",
                fontSize: "1.1rem",
              })}
            >
              Всі готелі
            </NavLink>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#cccccc" : "white",
                textDecoration: "none",
                fontSize: "1.1rem",
              })}
            >
              Про проект
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
