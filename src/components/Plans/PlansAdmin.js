import React from "react";
import "./PlansAdmin.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function PlansAdmin() {
  const navigate = useNavigate();

  const handlePlanClick = (planId) => {
    navigate(`/adminEmpleadoIndex/PlanDetails/${planId}`);
  };

  return (
    <div className="Container">
      <div className="FirstColumn">
        <div className="Plan" onClick={() => handlePlanClick(1)}>
          <div className="NamePlan1">Plan 1</div>
          <div className="PlanDetails1">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
        <div className="Plan" onClick={() => handlePlanClick(2)}>
          <div className="NamePlan2">Plan 2</div>
          <div className="PlanDetails2">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
      </div>
      <div className="SecondColumn">
        <div className="Plan" onClick={() => handlePlanClick(3)}>
          <div className="NamePlan3">Plan 3</div>
          <div className="PlanDetails3">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
        <div className="Plan" onClick={() => handlePlanClick(4)}>
          <div className="NamePlan4">Plan 4</div>
          <div className="PlanDetails4">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansAdmin;

import React from "react";
import "./PlansAdmin.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function PlansAdmin() {
  const navigate = useNavigate();

  const handlePlanClick = (planId) => {
    navigate(`/adminEmpleadoIndex/PlanDetails/${planId}`);
  };

  return (
    <div className="Container">
      <div className="FirstColumn">
        <div className="Plan" onClick={() => handlePlanClick(1)}>
          <div className="NamePlan1">Plan 1</div>
          <div className="PlanDetails1">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
        <div className="Plan" onClick={() => handlePlanClick(2)}>
          <div className="NamePlan2">Plan 2</div>
          <div className="PlanDetails2">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
      </div>
      <div className="SecondColumn">
        <div className="Plan" onClick={() => handlePlanClick(3)}>
          <div className="NamePlan3">Plan 3</div>
          <div className="PlanDetails3">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
        <div className="Plan" onClick={() => handlePlanClick(4)}>
          <div className="NamePlan4">Plan 4</div>
          <div className="PlanDetails4">
            <Button variant="add">Añadir</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansAdmin;
