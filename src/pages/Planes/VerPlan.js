import React from "react";
import "./VerPlan.css";
import { useNavigate, useParams } from "react-router-dom"; // Importa useParams

const planData = {
  1: { title: "Plan 1", description: "10 días", price: "100K" },
  2: { title: "Plan 2", description: "20 días", price: "200K" },
  3: { title: "Plan 3", description: "30 días", price: "300K" },
  4: { title: "Plan 4", description: "40 días", price: "400K" },
};

const PlanDetails = () => {
  const { planId } = useParams(); // Obtiene planId de los parámetros de la URL
  const navigate = useNavigate();
  const plan = planData[planId];

  const handleBack = () => {
    navigate("/adminEmpleadoIndex/PlansAdmin");
  };

  return (
    <div className="plan-details-container">
      <h2>{plan.title}</h2>
      <p>Descripción del plan: {plan.description}</p>
      <p>Precio: {plan.price}</p>
      <div className="button-group">
        <button className="button" onClick={() => alert("Añadir cliente")}>
          Añadir cliente
        </button>
        <button className="button" onClick={handleBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default PlanDetails;
