import React from "react";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">El futuro de las</span>
            <span className="hero-title-line hero-title-accent">
              finanzas digitales
            </span>
            <span className="hero-title-line">está aquí</span>
          </h1>
          <p className="hero-description">
            Experimenta la transparencia, confianza e innovación que
            revolucionará tu forma de manejar el dinero. Nipto te ofrece control
            total con la sofisticación que mereces.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Comenzar ahora</button>
            <button className="btn-secondary">Ver demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-ui">
                  <div className="phone-header">
                    <div className="phone-time">9:41</div>
                    <div className="phone-indicators">
                      <div className="signal-bar"></div>
                      <div className="wifi-icon"></div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="phone-content">
                    <div className="balance-card">
                      <h3>Saldo disponible</h3>
                      <div className="balance-amount">$2,458,350</div>
                      <div className="balance-change positive">
                        +$125,000 (+5.4%)
                      </div>
                    </div>
                    <div className="quick-actions">
                      <div className="action-item">
                        <div className="action-icon transfer"></div>
                        <span>Transferir</span>
                      </div>
                      <div className="action-item">
                        <div className="action-icon pay"></div>
                        <span>Pagar</span>
                      </div>
                      <div className="action-item">
                        <div className="action-icon invest"></div>
                        <span>Invertir</span>
                      </div>
                      <div className="action-item">
                        <div className="action-icon save"></div>
                        <span>Ahorrar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
