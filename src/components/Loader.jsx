"use client";
import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 1 second + fade-out time
    const fadeDuration = 500;
    const totalDuration = 1000 + fadeDuration;

    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!visible) return null;

  return (
    <div id="page-loader" className="page-loader">
      <div className="loader-content">
        <div className="loader-logo">Nipto</div>
        <div className="loader-spinner"></div>
        <div className="loader-text">Cargando experiencia financiera...</div>
      </div>
    </div>
  );
};
