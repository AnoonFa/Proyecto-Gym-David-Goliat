import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/HeaderAdmin'; 
import Footer from '../Footer/Footer'; 
import VerCliente from '../VerCliente/VerCliente';

function AdminPage() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<h2>Bienvenido, Administrador</h2>} />
      <Route path="VerCliente" element={<VerCliente />} />
      {/* Agrega otras rutas aquí */}
    </Routes>
    <Footer />
  </>
  );
}

export default AdminPage;
