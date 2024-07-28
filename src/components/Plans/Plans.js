import React from "react";
import './Plans.css';
import Button from "../../components/Button/Button";

function Plans() {
    return (
        <div className="Container">
            <div className="FirstColumn">
                <div className="Plan">
                    <div className='NamePlan1'>
                        Plan 1
                    </div>
                    <div className='PlanDetails1'>
                        <p>Detalles del Plan 1</p>
                        <Button variant="add">Ver</Button>
                    </div>
                </div>
                <div className="Plan">
                    <div className='NamePlan2'>
                        Plan 2
                    </div>
                    <div className='PlanDetails2'>
                        <p>Detalles del Plan 2</p>
                        <Button variant="add">Ver</Button>
                    </div>
                </div>
            </div>
            <div className="SecondColumn">
                <div className="Plan">
                    <div className='NamePlan3'>
                        Plan 3
                    </div>
                    <div className='PlanDetails3'>
                        <p>Detalles del Plan 3</p>
                        <Button variant="add">Ver</Button>
                    </div>
                </div>
                <div className="Plan">
                    <div className='NamePlan4'>
                        Plan 4
                    </div>
                    <div className='PlanDetails4'>
                        <p>Detalles del Plan 4</p>
                        <Button variant="add">Ver</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plans;
