import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Nipto</h3>
            <p>El futuro de las finanzas digitales</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Producto</h4>
              <ul>
                <li>
                  <a href="#">Características</a>
                </li>
                <li>
                  <a href="#">Seguridad</a>
                </li>
                <li>
                  <a href="#">Precios</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Soporte</h4>
              <ul>
                <li>
                  <a href="#">Centro de ayuda</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Nipto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
