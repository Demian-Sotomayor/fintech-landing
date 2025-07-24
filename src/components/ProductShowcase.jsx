import React from "react";

export const ProductShowcase = () => {
  return (
    <section id="product" className="product-showcase">
      <div className="container">
        <div className="product-content">
          <div className="product-info">
            <h2 className="product-title">Tu dinero, tu control</h2>
            <div className="product-features">
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <h4>Transferencias instantáneas</h4>
                  <p>Envía y recibe dinero al instante, sin esperas</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <h4>Inversiones inteligentes</h4>
                  <p>Haz crecer tu dinero con recomendaciones personalizadas</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check">✓</div>
                <div>
                  <h4>Análisis detallado</h4>
                  <p>Comprende tus gastos con insights automáticos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-visual">
            <div className="floating-phone">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="chart-container">
                      <div className="chart-bar" data-height="60"></div>
                      <div className="chart-bar" data-height="80"></div>
                      <div className="chart-bar" data-height="40"></div>
                      <div className="chart-bar" data-height="90"></div>
                      <div className="chart-bar" data-height="70"></div>
                    </div>
                    <div className="transaction-list">
                      <div className="transaction-item">
                        <div className="transaction-icon"></div>
                        <div className="transaction-details">
                          <div className="transaction-name">Café Central</div>
                          <div className="transaction-amount">-$4,500</div>
                        </div>
                      </div>
                      <div className="transaction-item">
                        <div className="transaction-icon income"></div>
                        <div className="transaction-details">
                          <div className="transaction-name">Salario</div>
                          <div className="transaction-amount income">
                            +$1,200,000
                          </div>
                        </div>
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
