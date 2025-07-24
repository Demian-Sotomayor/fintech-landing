import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Nipto</h2>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#benefits">Beneficios</a>
          </li>
          <li>
            <a href="#product">Producto</a>
          </li>
          <li>
            <a href="#cta">Únete</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
