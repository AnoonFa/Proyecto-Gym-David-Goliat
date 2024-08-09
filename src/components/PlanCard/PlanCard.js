import React from 'react';
import './PlanCard.css'; // Crea este archivo para los estilos

const PlanCard = ({ image, title, description, price }) => {
  return (
    <div className="plan-card">
      <img src={image} alt={title} className="plan-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Desde <strong>{price}</strong></p>
      <a href="#" className="buy-link">Comprar</a>
    </div>
  );
};

export default PlanCard;
