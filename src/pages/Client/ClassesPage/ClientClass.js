import React from 'react';

import { Calendar } from 'react-big-calendar';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

function ClientClass() {
  return (
    <div className="ClientProductsContainer">
      <Header />
       <center>
        <h2>¡Mira nuestras clases! </h2>
        
        <Calendar  /> 
        </center>
        <Footer />
    </div>
);
}
export default ClientClass;
