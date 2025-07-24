import React from "react";

export const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué elegir Nipto?</h2>
          <p className="section-subtitle">
            Descubre las ventajas que nos hacen únicos en el mundo fintech
          </p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon transparency">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Transparencia Total</h3>
            <p className="benefit-description">
              Sin comisiones ocultas, sin letra pequeña. Todo claro y simple,
              para que tomes decisiones informadas.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon security">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22S8 18 8 12V6L12 4L16 6V12C16 18 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Máxima Seguridad</h3>
            <p className="benefit-description">
              Tecnología de encriptación bancaria y autenticación biométrica
              para proteger tu dinero 24/7.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon innovation">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Innovación Constante</h3>
            <p className="benefit-description">
              IA avanzada para personalizar tu experiencia financiera y ayudarte
              a alcanzar tus metas.
            </p>
          </div>
          {/* <div className="benefit-card">
            <div className="benefit-icon sophistication">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="benefit-title">Sofisticación</h3>
            <p className="benefit-description">
              Diseño elegante e interfaz intuitiva que hace que manejar tu
              dinero sea una experiencia placentera.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
