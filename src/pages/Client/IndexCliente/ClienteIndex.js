import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

function ClientPage() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<h2>Bienvenido</h2>} />
      <Route path="VerCliente" element={<VerCliente />} />
    </Routes>
    <Footer />
  </>
  );
}

export default ClientPage;
