import React from 'react';
import './PlansPage.css';
import Plans from '../../../components/Plans/Plans';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

function PlanesCliente() {
  return (
    <div className="ClientPlansContainer">
      <Header />
       <center>
        <h2>¡Nuestros Planes! </h2>
        
        <Plans  /> 
        </center>
        <Footer />
    </div>
);
}
export default PlanesCliente;
