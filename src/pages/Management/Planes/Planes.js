import React from 'react';
import Header from '../../../components/Header/HeaderAdmin';
import PlanCard from '../../../components/PlanCard/PlanCard';
import './Planes.css';

const Planes = () => {
  return (
    <div>
      <Header />
      <div className="plans-container">
        <h1>Planes</h1>
        <div className="plans-grid">
          <PlanCard
            image="ruta/a/la/imagen1.jpg"
            title="Plan integral"
            description="El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales."
            price="$79.900"
          />
          <PlanCard
            image="ruta/a/la/imagen2.jpg"
            title="Tiquetera"
            description="11 prácticas libres en nuestros gimnasios para que puedas entrenar con la flexibilidad que necesites."
            price="$72.000"
          />
          <PlanCard
            image="ruta/a/la/imagen3.jpg"
            title="Entrenam. semipersonalizado"
            description="Ejercítate junto a tu partner y logren juntos la meta esperada. Podrás adquirir 1 o 10 clases."
            price="$82.600"
          />
        </div>
      </div>
    </div>
  );
};

export default Planes;