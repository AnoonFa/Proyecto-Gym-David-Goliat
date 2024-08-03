import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ClientClass from '../../pages/Client/ClassesPage/ClassesPage';
import PlanesCliente from '../../pages/Client/PlansPage/PlansPage';
import ProductsClient from '../../pages/Client/ProductsPage/ProductsPage';
import RutinesPage from '../../pages/Client/RoutinesPage/RoutinesPage'; // Importa RutinesPage

function ClientePage() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Bienvenido, Cliente</h2>} />
        <Route path='ClientClass' element={<ClientClass />} />
        <Route path='PlanesCliente' element={<PlanesCliente />} />
        <Route path='ProductsClient' element={<ProductsClient />} />
        <Route path='RutinesClient' element={<RutinesPage />} /> {/* Nueva ruta */}
        {/* Otras rutas aquí */}
      </Routes>
      <Footer />
    </>
  );
}

export default ClientePage;
