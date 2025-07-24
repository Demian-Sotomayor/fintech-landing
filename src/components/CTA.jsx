import React from "react";

export const CTA = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Únete a la revolución financiera</h2>
          <p className="cta-description">
            Más de 500,000 usuarios ya confían en Nipto. Descarga la app y
            comienza tu transformación financiera hoy.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta">
              <span className="btn-cta-text">Descargar ahora</span>
              <div className="btn-cta-arrow">→</div>
            </button>
          </div>
          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Usuarios activos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating App Store</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
