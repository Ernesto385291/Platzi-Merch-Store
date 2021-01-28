import React from 'react';

import '../styles/components/Success.css';

export const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Nombre, gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};
